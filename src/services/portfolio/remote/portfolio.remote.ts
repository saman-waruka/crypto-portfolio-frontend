import Rxios from "../../../core/Rxios";
import { PostAddToPortfolioResponse } from "../response";
import { PostAddToPortfolioBody } from "../types";

class PortfolioRemote {
  private http = new Rxios({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  });

  postAddToPortfolio = (token: string, data: PostAddToPortfolioBody) => {
    return this.http.post<PostAddToPortfolioResponse>(`/portfolio`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
export default PortfolioRemote;
