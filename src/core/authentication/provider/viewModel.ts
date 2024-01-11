import { useEffect, useState } from "react";
import {
  accessTokenDecode,
  getAccessToken,
  getUserInformation,
  saveAccessToken,
  saveUserInformation,
} from "../function";

// import AuthRemote from "../../../pages/user/services/remote/authRemote";
import { PostSignInResponse } from "../../../pages/user/services/response";
import type { UserInformation } from "../type";
// import AuthRepository from "../../../pages/user/services/remote/authRepository";
import UserRepository from "../../../pages/user/services/remote/userRepository";
import UserRemote from "../../../pages/user/services/remote/user.Remote";

function useViewModel() {
  const [userInformation, setUserInformation] = useState(getUserInformation());
  const [accessToken, setAccessToken] = useState(getAccessToken() ?? "");
  // const authRepository = new AuthRepository(new AuthRemote());
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
    console.log("signInResponse ", signInResponse);
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

  return {
    isLoggedIn,
    accessToken,
    userInformation,
    login,
  };
}

export default useViewModel;
