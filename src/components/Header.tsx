import React, { useState } from "react";
import { SiDatadog } from "react-icons/si";
import { Link, useHistory } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";

export type UserData = {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
};

const nullData = {
  email: "",
  familyName: "",
  givenName: "",
  googleId: "",
  imageUrl: "",
  name: "",
};

export const Header: React.FC = () => {
  const history = useHistory();
  const [userData, setUserData] = useState<UserData>(
    JSON.parse(localStorage.getItem("userData") || "{}")
  );

  console.log(userData);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData") || "{}"));
  }, []);

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    history.push("/auth");
    setUserData(nullData);
  };

  return (
    <header className="flex items-center justify-around">
      <div>
        <Link to="/" className=" flex justify-center items-center p-4 text-4xl">
          <SiDatadog size={50} color="rgba(248, 113, 113)" />
          <h1>Woofstagram</h1>
        </Link>
        <p className="flex justify-center">Social Media for Your Pets!</p>
      </div>
      <div>
        {!userData.name ? (
          <Link to="/auth" className="flex items-center text-xl">
            <GoPerson />
            <h5>Sign In</h5>
          </Link>
        ) : (
          <div className="flex items-center">
            {userData.name && (
              <h5 className="pr-4 font-bold text-xl">{userData?.name}</h5>
            )}
            <button onClick={logout} className="text-red-400 flex items-center">
              <FaSignOutAlt className="ml-1" />
              <span>Logout</span>
            </button>
          </div>
        )}

        {/* <div>
          {userData.name === "sample" && (
            <Link to="/auth" className="flex items-center text-xl">
              <GoPerson />
              <h5>Sign In</h5>
            </Link>
          )}
        </div> */}

        {/* <div>
          {userData.name === "" && (
            <div className="flex items-center">
              {userData.name && (
                <h5 className="pr-4 font-bold text-xl">{userData?.name}</h5>
              )}
              <button
                onClick={logout}
                className="text-red-400 flex items-center"
              >
                <FaSignOutAlt className="ml-1" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div> */}
      </div>
    </header>
  );
};
