import { useCallback, useEffect, useState } from "react";
import {
  accessTokenDecode,
  clearToken,
  getAccessToken,
  getUserInformation,
  saveAccessToken,
  saveUserInformation,
} from "../function";

import { PostSignInResponse } from "../../../pages/user/services/response";
import type { UserInformation } from "../type";
import UserRepository from "../../../pages/user/services/repository/userRepository";
import UserRemote from "../../../pages/user/services/remote/user.Remote";

function useViewModel() {
  const [userInformation, setUserInformation] = useState(getUserInformation());
  const [accessToken, setAccessToken] = useState(getAccessToken() ?? "");
  const userRepository = new UserRepository(new UserRemote());
  const accessTokenPayload = accessTokenDecode(getAccessToken() ?? "");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    Boolean(accessTokenPayload?.user)
  );

  const getProfile = (
    accessToken: string,
    next: (user: UserInformation) => void
  ) => {
    userRepository.getProfile(accessToken).subscribe({
      next,
      error: (err: { response: { status: number } }) => {
        console.error("Error on getProfile", err);
      },
    });
  };

  const login = (
    signInResponse: PostSignInResponse,
    onGetProfileSuccess?: () => void
  ) => {
    const { token } = signInResponse;
    saveAccessToken(token);
    getProfile(token, (user) => {
      saveUserInformation(user);
      setAccessToken(token);
      setUserInformation(user);
      setIsLoggedIn(true);
      onGetProfileSuccess?.();
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      getProfile(accessToken, (user) => saveUserInformation(user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    clearToken();
  }, []);

  return {
    isLoggedIn,
    accessToken,
    userInformation,
    login,
    logout,
  };
}

export default useViewModel;
