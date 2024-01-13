import Rxios from "../../../core/Rxios";
import { GetListCryptocurrencyResponse } from "../response";

class CryptocurrencyRemote {
  private http = new Rxios({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  });

  getListCryptocurrency = (token: string) => {
    return this.http.get<GetListCryptocurrencyResponse>(
      `/cryptocurrency`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
}
export default CryptocurrencyRemote;
