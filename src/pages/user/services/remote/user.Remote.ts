import Rxios from "../../../../core/Rxios";
import { GetProfileResponse } from "../response";

class UserRemote {
  private http = new Rxios({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  });

  getProfile = (token: string) => {
    return this.http.get<GetProfileResponse>(
      `/users/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
}
export default UserRemote;
