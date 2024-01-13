import { useCallback, useContext, useEffect, useState } from "react";
import { UserInformationContext } from "../../core/authentication/context";
import PortfolioRepository from "../../services/portfolio/repository/portfolio.repository";
import PortfolioRemote from "../../services/portfolio/remote/portfolio.remote";
import { Portfolio } from "../../services/portfolio/types";
import { GetListPortfolioResponse } from "../../services/portfolio/response";

function usePortfolioViewModel() {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>([]);

  const { accessToken } = useContext(UserInformationContext);
  const portfolioRepository = new PortfolioRepository(new PortfolioRemote());

  const getListPortfolio = useCallback(() => {
    portfolioRepository.getListPortfolio(accessToken).subscribe({
      next: (response: GetListPortfolioResponse) => {
        setPortfolioList(response);
      },
      error: (err: { response: unknown }) => {
        console.log(" getCryptocurrencyList err", err?.response);
      },
      complete: () => {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getListPortfolio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { portfolioList };
}

export default usePortfolioViewModel;
