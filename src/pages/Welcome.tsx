import { useContext } from "react";
import { UserInformationContext } from "../core/authentication/context";
import {
  UserInformation,
  UserInformationContextType,
} from "../core/authentication/type";

const Welcome = () => {
  const { userInformation, logout } = useContext<UserInformationContextType>(
    UserInformationContext
  );

  return (
    <div className="h-[100vh] flex flex-col justify-center align-middle space-y-3">
      <div className="flex flex-col mx-auto my-auto w-fit h-fit">
        <div>
          Welcome! {(userInformation as UserInformation).name} (
          {(userInformation as UserInformation).email})
        </div>

        <button
          onClick={logout}
          className="w-full mt-10 h-12 bg-slate-500 px-4 rounded-3xl mx-auto w-fit"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
