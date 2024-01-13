import { useContext, useState } from "react";
import { PostSignInResponse } from "../user/services/response";
import AuthRemote from "../user/services/remote/authRemote";
import AuthRepository from "../user/services/repository/authRepository";
import { UserInformationContext } from "../../core/authentication/context";
import { AxiosError } from "axios";
import { LoginData } from "./type";

const useLoginViewModel = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { login } = useContext(UserInformationContext);

  const authRepository = new AuthRepository(new AuthRemote());

  const submitForm = async (values: LoginData) => {
    authRepository.signIn(values.email, values.password).subscribe({
      next: (result: PostSignInResponse) => {
        login(result);
      },
      error: (err: AxiosError) => {
        if (err.response?.status === 401) {
          setErrorMessage("Email or Password invalid.");
        }
      },
    });
  };

  return { submitForm, errorMessage };
};

export default useLoginViewModel;
