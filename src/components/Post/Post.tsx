import React from "react";
import { AnimalData } from "../animal.interfaces";
import PetImage from "./PetImage";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

type PostProps = {
  dogDetail: AnimalData;
};

const Post: React.FC<PostProps> = ({ dogDetail }) => {
  const { name, description, city, images } = dogDetail;

  return (
    <div className="border rounded-lg border-gray-200 w-full">
      <PostHeader name={name} images={images} location={city} />
      <PetImage name={name} images={images} />
      <PostFooter name={name} description={description} />
    </div>
  );
};

export default Post;
