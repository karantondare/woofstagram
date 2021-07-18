import React, { useState } from "react";
import {
  FaRegComment,
  FaRegPaperPlane,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";

import { UserData } from "../Header";

type Props = {
  name: string;
  description: string;
};

const PostFooter: React.FC<Props> = ({ name, description }) => {
  const [like, setLike] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState<UserData>(
    JSON.parse(localStorage.getItem("userData") || "{}")
  );

  const randomNumber = Math.floor(Math.random() * 6) + 1;

  const toggleLike = () => setLike(!like);

  return (
    <div className="px-4 pb-0">
      <div className="flex justify-start px-2">
        {like ? (
          <button onClick={toggleLike} disabled={!userData.email}>
            <FaHeart className="m-2 cursor-pointer text-red-500" size="25" />
          </button>
        ) : (
          <button onClick={toggleLike} disabled={!userData?.email}>
            <FaRegHeart className="m-2 cursor-pointer text-red-500" size="25" />{" "}
          </button>
        )}
        <FaRegComment className="m-2 cursor-pointer" size="25" />
        <FaRegPaperPlane className="m-2 cursor-pointer" size="25" />
      </div>
      <p className="font-bold">{randomNumber} Likes</p>
      <p className="p-2">
        <span className="font-bold">{name}</span> {description.slice(0, 50)}
      </p>
      <div className="flex items-center border-t-2 py-2">
        <GrEmoji size={30} className="mr-4" />
        <input className="h-8" type="text" placeholder="Add a comment" />
      </div>
    </div>
  );
};

export default PostFooter;
