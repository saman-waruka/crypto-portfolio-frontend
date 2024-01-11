import { useContext, useState } from "react";
import { PostSignInResponse } from "../user/services/response";
import AuthRemote from "../user/services/remote/authRemote";
import AuthRepository from "../user/services/remote/authRepository";
import { UserInformationContext } from "../../core/authentication/context";
import { LoginData } from "./type";

const useLoginViewModel = () => {
  const [isWaitingForResponse, setIsWaitingForResponse] =
    useState<boolean>(false);

  const { login } = useContext(UserInformationContext);

  const authRepository = new AuthRepository(new AuthRemote());

  const submitForm = (values: LoginData) => {
    setIsWaitingForResponse(true);
    authRepository.signIn(values.email, values.password).subscribe({
      next: (result: PostSignInResponse) => {
        console.log("signIn  Result ", result);
        login(result);
      },
      error: (err: { response: unknown }) => {
        console.log(" signIn err", err?.response);

        setIsWaitingForResponse(false);
      },
    });
  };
  return { submitForm, isWaitingForResponse };
};

export default useLoginViewModel;
