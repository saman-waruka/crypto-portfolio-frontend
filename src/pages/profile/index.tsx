import { useContext } from "react";
import { UserProfileIcon } from "../../components/Icons";
import { UserInformationContext } from "../../core/authentication/context";

const Profile = () => {
  const { userInformation } = useContext(UserInformationContext);
  return (
    <div className="h-[calc(100vh-2.5rem)] flex flex-col justify-center">
      <UserProfileIcon width={150} className="self-center" />
      <div className="w-fit mx-auto space-y-4">
        <div>Name: {userInformation.name}</div>
        <div>Email: {userInformation.email}</div>
      </div>
    </div>
  );
};

export default Profile;
