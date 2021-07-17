import React from "react";

type PetImageProps = {
  images: string[];
  name: string;
};

const PetImage: React.FC<PetImageProps> = ({ images, name }) => {
  return (
    <div>
      <img src={images[0]} alt={name} />
    </div>
  );
};

export default PetImage;
