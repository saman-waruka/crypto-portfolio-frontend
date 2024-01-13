import Rxios from "../../../../core/Rxios";
import { PostSignUpRequestBody } from "../request";
import type { PostSignInResponse, PostSignUpResponse } from "../response";

class AuthRemote {
  private http = new Rxios({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  });

  postSignIn = (email: string, password: string) => {
    return this.http.post<PostSignInResponse>(`/auth/login`, {
      email,
      password,
    });
  };

  postSignUp = (values: PostSignUpRequestBody) => {
    return this.http.post<PostSignUpResponse>(`/auth/signup`, values);
  };
}
export default AuthRemote;
