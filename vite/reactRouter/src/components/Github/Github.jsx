import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log("data", data);
  /* const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Bhavin-cmp")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
 */
  return (
    <div className="text-center m-4 bg-gray-600 text-orange-600 p-4 text-3xl">
      Github Follower :{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Bhavin-cmp");
  console.log(response);
  return response.json();
};
