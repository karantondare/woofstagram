import { useEffect, useState } from "react";
import { AnimalData } from "./animal.interfaces";
import { fetchData } from "../utils/fetchData";
import Loader from "react-loader-spinner";
import Post from "./Post/Post";

const PetGrid = () => {
  const [dogDetails, setDogdetails] = useState<AnimalData[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData(setDogdetails);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center ">
          <Loader
            type="BallTriangle"
            color="#F87171"
            height={100}
            width={100}
          />
        </div>
      )}
      <div className="px-56 py-20 grid grid-cols-3 auto-rows-auto gap-12">
        {dogDetails.map((dogDetail) => (
          <Post key={dogDetail.id} dogDetail={dogDetail} />
        ))}
      </div>
    </>
  );
};

export default PetGrid;
