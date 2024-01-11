import type { JwtPayload } from "jwt-decode";
import {
  GetProfileResponse,
  PostSignInResponse,
} from "../../pages/user/services/response";

export type AccessTokenPayload = JwtPayload & {
  user?: {
    email: string;
    name: string;
  };
};

export type UserInformation = GetProfileResponse;

export type UserInformationContextType = {
  isLoggedIn: boolean;
  accessToken: string;
  userInformation: UserInformation | object;
  login: (
    signInResponse: PostSignInResponse,
    onGetProfileSuccess?: () => void
  ) => void;
  logout: () => void;
};

export type AuthProviderType = ({
  children,
}: {
  children: JSX.Element;
}) => JSX.Element;

export type LocalStorageSessionExpired = {
  isSessionExpired: boolean;
  currentPage: string;
};
