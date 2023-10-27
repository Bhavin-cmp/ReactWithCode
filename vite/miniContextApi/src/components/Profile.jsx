import React from "react";
import userContext from "../context/userContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return <div>Please Login</div>;
  } else {
    return <div>Welcome {user.userName}</div>;
  }
};

export default Profile;
