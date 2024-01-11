import AuthRemote from "../remote/authRemote";
import { PostSignUpRequestBody } from "../request";
import type { PostSignInResponse, PostSignUpResponse } from "../response";
import type { Observable } from "rxjs";

class AuthRepository {
  private remote: AuthRemote;

  constructor(remote: AuthRemote) {
    this.remote = remote;
  }

  signIn = (
    email: string,
    password: string
  ): Observable<PostSignInResponse> => {
    return this.remote.postSignIn(email, password);
  };

  signUp = (values: PostSignUpRequestBody): Observable<PostSignUpResponse> => {
    return this.remote.postSignUp(values);
  };
}

export default AuthRepository;
