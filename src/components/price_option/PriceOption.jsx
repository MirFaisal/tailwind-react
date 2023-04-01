import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";

const PriceOption = ({ option }) => {
  return (
    <div className=" bg-violet-400 rounded-md p-6 text-center w-80 hover:shadow-2xl duration-200 ease-linear">
      <h2>
        <span className=" font-bold text-white text-5xl inline-block pb-4">
          {option.price}
        </span>
        <span className="text-white font-medium">/mo</span>
      </h2>
      <p className="text-white font-medium">{option.name}</p>
      <div>
        {option.features.map((feature, ind) => (
          <div key={ind} className="flex items-center justify-center">
            <CheckBadgeIcon className=" w-5 h-5 text-green-300" />
            <p className="my-2 text-xl ms-2">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
