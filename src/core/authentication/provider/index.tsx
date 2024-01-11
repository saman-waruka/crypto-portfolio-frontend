import { UserInformationContext } from "./../context";
import type { AuthProviderType } from "./../type";
import useViewModel from "./viewModel";

export const AuthProvider: AuthProviderType = ({ children }) => {
  const { isLoggedIn, accessToken, userInformation, login } = useViewModel();

  return (
    <UserInformationContext.Provider
      value={{
        isLoggedIn,
        accessToken,
        userInformation,
        login,
      }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};
