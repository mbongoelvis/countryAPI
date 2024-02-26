import React from "react";

export const CountryCard = ({ img, name, population, region, capital }) => {
  return (
    <div className="w-full h-[25rem] grid grid-rows-2 rounded-lg overflow-hidden dark:bg-DarkmodeBody bg-LightmodeBgBody shadow-2xl shadow-LightModeBorder dark:shadow-DarkModeBorder">
      <div className="w-full">
        <img src={img} alt="Coutry flag" className="w-full h-full" />
      </div>
      <div className="w-full h-full text-black dark:text-white p-5 md:p-10">
        <h2 className="text-lg mb-3 font-[800]">{name}</h2>
        <div>
          <p className="font-semibold mb-2">
            Population: <span className="font-thin">{population}</span>
          </p>
          <p className="font-semibold mb-2">
            Region: <span className="font-thin">{region}</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="font-thin">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
