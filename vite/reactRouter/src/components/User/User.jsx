import React from "react";
import { useParams } from "react-router-dom";

function User() {
  //   console.log("useParams", useParams);
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-orange-500 p-5 text-3xl">
      User : {userid}
    </div>
  );
}

export default User;
