import type { GetProfileResponse } from "../response";
import type { Observable } from "rxjs";
import UserRemote from "../remote/user.Remote";

class UserRepository {
  private remote: UserRemote;

  constructor(remote: UserRemote) {
    this.remote = remote;
  }

  getProfile = (token: string): Observable<GetProfileResponse> => {
    return this.remote.getProfile(token);
  };
}

export default UserRepository;
