import React from "react";
import { AnimalData } from "./animal.interfaces";
import Post from "./Post/Post";

type Props = {
  dogDetail: AnimalData;
};

const Pet: React.FC<Props> = ({ dogDetail }) => {
  return (
    <div className="flex border rounded-lg border-gray-100 w-full h-96">
      <Post dogDetail={dogDetail} />
    </div>
  );
};

export default Pet;
