import { useContext } from "react";
import { UserProfileIcon } from "../../components/Icons";
import { UserInformationContext } from "../../core/authentication/context";

const Profile = () => {
  const { userInformation } = useContext(UserInformationContext);
  return (
    <div className="mt-20">
      <img
        src={UserProfileIcon}
        alt="user profile logo"
        width={100}
        className="mx-auto"
      />
      <div className="w-fit mx-auto mt-4 space-y-4">
        <div>Name: {userInformation.name}</div>
        <div>Email: {userInformation.email}</div>
      </div>
    </div>
  );
};

export default Profile;
