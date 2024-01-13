import { Observable } from "rxjs";
import CryptocurrencyRemote from "../remote/cryptocurrency.remote";
import { GetListCryptocurrencyResponse } from "../response";

class CryptocurrencyRepository {
  private remote: CryptocurrencyRemote;

  constructor(remote: CryptocurrencyRemote) {
    this.remote = remote;
  }

  getListCryptocurrency = (
    token: string
  ): Observable<GetListCryptocurrencyResponse> => {
    return this.remote.getListCryptocurrency(token);
  };
}

export default CryptocurrencyRepository;
