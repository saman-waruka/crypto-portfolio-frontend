import { Observable } from "rxjs";
import PortfolioRemote from "../remote/portfolio.remote";
import {
  GetListPortfolioResponse,
  PostAddToPortfolioResponse,
} from "../response";
import { PostAddToPortfolioBody } from "../types";

class PortfolioRepository {
  private remote: PortfolioRemote;

  constructor(remote: PortfolioRemote) {
    this.remote = remote;
  }

  postAddToPortfolio = (
    token: string,
    data: PostAddToPortfolioBody
  ): Observable<PostAddToPortfolioResponse> => {
    return this.remote.postAddToPortfolio(token, data);
  };

  getListPortfolio = (token: string): Observable<GetListPortfolioResponse> => {
    return this.remote.getListPortfolio(token);
  };
}

export default PortfolioRepository;
