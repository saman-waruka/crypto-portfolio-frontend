import { Observable } from "rxjs";
import PortfolioRemote from "../remote/portfolio.remote";
import { PostAddToPortfolioResponse } from "../response";
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
}

export default PortfolioRepository;
