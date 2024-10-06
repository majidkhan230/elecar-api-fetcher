import React from "react";

const BrandComp = () => {
  const cars = [
    {
      model: "Porsche Turbo S",
      acceleration: "0-3.7 Sec",
      topSpeed: "356 km/h",
      type: "Electric",
      price: "$175,900",
      comment: "The fastest electric car in its class.",
      imageUrl: "/assets/images/porsche1.png",
    },
    {
      model: "Porsche Taycan",
      acceleration: "0-3.7 Sec",
      topSpeed: "356 km/h",
      type: "Electric",
      price: "$114,900",
      comment: "Affordable and fast electric performance.",
      imageUrl: "/assets/images/porsche2.png",
    },
    {
      model: "Porsche Turbo S Cross",
      acceleration: "0-3.7 Sec",
      topSpeed: "356 km/h",
      type: "Electric",
      price: "$175,900",
      comment: "Perfect for long trips with style and speed.",
      imageUrl: "/assets/images/porsche3.png",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {cars.map((car, index) => (
        <div key={index} className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full sm:w-72">
          <img
            src={car.imageUrl}
            alt={car.model}
            className="rounded-md w-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{car.model}</h2>
          <p className="text-sm mb-2">Acceleration: {car.acceleration}</p>
          <p className="text-sm mb-2">Top Speed: {car.topSpeed}</p>
          <p className="text-sm mb-2">Type: {car.type}</p>
          <p className="text-sm italic text-gray-400 mt-4">"{car.comment}"</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold">{car.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandComp;
