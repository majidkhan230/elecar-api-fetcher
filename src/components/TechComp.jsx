import React from "react";

const TechComp = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 px-4">
      <div className="left md:w-1/2 w-full">
        <img src="/assets/images/hero2.png" alt="" className="w-full" />
      </div>
      <div className="right md:w-1/2 w-full flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Machines with <br /> Future Technology
        </h1>
        <p>
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with new
          and innovative platforms that last a long time.
        </p>
        <button className="rounded-md w-fit px-4 py-2 bg-blue-500 text-white">
          Know more
        </button>
      </div>
    </div>
  );
};

export default TechComp;
