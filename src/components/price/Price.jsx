import React from "react";
import PriceOption from "../price_option/PriceOption";

const Price = () => {
  const pricingOption = [
    {
      id: 1,
      name: "free",
      price: 0,
      features: [
        "Awesome Features 1",
        "Awesome Features 2",
        "Awesome Features 4",
        "Awesome Features 3",
        "Awesome Features 5",
        "Awesome Features 6",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Awesome Features 1",
        "Awesome Features 2",
        "Awesome Features 4",
        "Awesome Features 3",
        "Awesome Features 5",
        "Awesome Features 6",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      features: [
        "Awesome Features 1",
        "Awesome Features 2",
        "Awesome Features 4",
        "Awesome Features 3",
        "Awesome Features 5",
        "Awesome Features 6",
      ],
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="text-center bg-blue-400 p-5 mt-6 rounded-3xl mx-6 ">
          <h2 className="text-white text-7xl font-sans">Best price in town</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 justify-items-center content-center">
          {pricingOption.map((option) => (
            <PriceOption key={option.id} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
