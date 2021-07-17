import React from "react";
import { GoLocation } from "react-icons/go";

type PostHeaderProps = {
  name: string;
  images: string[];
  location: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ name, images, location }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src={images[0]}
          alt={name}
        />
        <p className="font-bold">{name}</p>
      </div>
      <div className="flex items-center">
        <GoLocation className="mr-2" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default PostHeader;
