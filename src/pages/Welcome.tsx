import { useContext } from "react";
import { UserInformationContext } from "../core/authentication/context";
import {
  UserInformation,
  UserInformationContextType,
} from "../core/authentication/type";

const Welcome = () => {
  const { userInformation } = useContext<UserInformationContextType>(
    UserInformationContext
  );
  return (
    <div>
      Welcome! {(userInformation as UserInformation).name} (
      {(userInformation as UserInformation).email})
    </div>
  );
};

export default Welcome;
