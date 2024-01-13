import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthRemote from "../user/services/remote/authRemote";
import AuthRepository from "../user/services/repository/authRepository";
import { RegisterData } from "./type";
import { PUBLIC_ROUTE } from "../../core/constants/routePaths";

const useRegisterViewModel = () => {
  const [isWaitingForResponse, setIsWaitingForResponse] =
    useState<boolean>(false);

  const navigate = useNavigate();
  const authRepository = new AuthRepository(new AuthRemote());

  const submitForm = (values: RegisterData) => {
    setIsWaitingForResponse(true);
    authRepository.signUp(values).subscribe({
      next: () => {},
      error: (err: { response: unknown }) => {
        console.log(" signUp err", err?.response);
        setIsWaitingForResponse(false);
      },
      complete: () => {
        setIsWaitingForResponse(false);
        navigate(PUBLIC_ROUTE.LOGIN);
      },
    });
  };
  return { submitForm, isWaitingForResponse };
};

export default useRegisterViewModel;
