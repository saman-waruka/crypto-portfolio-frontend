import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthRemote from "../user/services/remote/authRemote";
import AuthRepository from "../user/services/repository/authRepository";
import { RegisterData } from "./type";
import { PUBLIC_ROUTE } from "../../core/constants/routePaths";
import { AxiosError } from "axios";

const useRegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();
  const authRepository = new AuthRepository(new AuthRemote());

  const submitForm = (values: RegisterData) => {
    authRepository.signUp(values).subscribe({
      next: () => {},
      error: (err: AxiosError) => {
        if (err.response?.status === 409) {
          setErrorMessage("Account exists.");
        }
      },
      complete: () => {
        navigate(PUBLIC_ROUTE.LOGIN);
      },
    });
  };
  return { submitForm, errorMessage };
};

export default useRegisterViewModel;
