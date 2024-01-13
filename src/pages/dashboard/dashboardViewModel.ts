import { GetListCryptocurrencyResponse } from "./../../services/cryptocurrency/response";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserInformationContext } from "../../core/authentication/context";
import CryptocurrencyRepository from "../../services/cryptocurrency/repository/cryptocurrency.repository";
import CryptocurrencyRemote from "../../services/cryptocurrency/remote/cryptocurrency.remote";
import { Cryptocurrency } from "../../services/cryptocurrency/type";

function useDashboardViewModel() {
  const [cryptocurrencyList, setCryptocurrencyList] = useState<
    Cryptocurrency[]
  >([]);
  const [isWaitingForResponse, setIsWaitingForResponse] =
    useState<boolean>(false);

  const { accessToken } = useContext(UserInformationContext);

  const cryptocurrencyRepository = new CryptocurrencyRepository(
    new CryptocurrencyRemote()
  );

  const getCryptocurrencyList = useCallback(() => {
    console.log(" getCryptocurrencyList ");
    setIsWaitingForResponse(true);
    cryptocurrencyRepository.getListCryptocurrency(accessToken).subscribe({
      next: (response: GetListCryptocurrencyResponse) => {
        setCryptocurrencyList(response);
      },
      error: (err: { response: unknown }) => {
        console.log(" getCryptocurrencyList err", err?.response);
        setIsWaitingForResponse(false);
      },
      complete: () => {
        setIsWaitingForResponse(false);
      },
    });
    setCryptocurrencyList([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCryptocurrencyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cryptocurrencyList, isWaitingForResponse };
}

export default useDashboardViewModel;
