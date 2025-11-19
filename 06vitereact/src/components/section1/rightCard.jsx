import React from "react";
import CardContent from "./cardContent";
const RightCard = ({image}) => {
  return (
    <div>
      <div className=" h-[40vh] w-80 overflow-hidden relative rounded-4xl ">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt=""
        />
        <CardContent />
      </div>
    </div>
  );
};

export default RightCard;
