import React from "react";
import { FaSearch, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

export const MainPage = ({handelSearch, handelFillter}) => {

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
    // use state for the drop down
  const [dropDown, setDropDown] = useState(false)


  return (
    <div className="container mx-auto">
      <div className="flex md:justify-between md:items-center flex-col md:flex-row px-2">
        <div className="flex w-full md:w-[35%] h-12 px-5 rounded dark:bg-DarkmodeBody bg-LightmodeBgBody shadow-2xl shadow-LightModeBorder dark:shadow-DarkModeBorder items-center gap-3">
          <FaSearch className="text-black dark:text-white" />
          <input
            type="text"
            placeholder="Search for a country...."
            className="w-full outline-none bg-transparent text-black dark:text-white"
            onChange={(e) => handelSearch(e.target.value)}
          />
        </div>
        {/* filter  */}
        <div
          className="w-[12rem] mt-4 md:mt-0 md:min-w-[5rem] px-5 py-3 rounded dark:bg-DarkmodeBody bg-LightmodeBgBody shadow-2xl shadow-LightModeBorder dark:shadow-DarkModeBorder cursor-pointer relative"
          onClick={() => setDropDown(!dropDown)}
        >
          <div className="flex items-center text-white gap-5 transition-all ease-in-out duration-300">
            <p className="text-black dark:text-white">Filter by Region</p>
            {!dropDown ? (
              <FaArrowDown className="text-black dark:text-white" />
            ) : (
              <FaArrowUp className="text-black dark:text-white" />
            )}
          </div>
          {/* drop down */}
          {dropDown ? (
            <div className="absolute top-[3.5rem] left-0 min-w-[11.8rem] px-5 py-3 rounded dark:bg-DarkmodeBody bg-LightmodeBgBody shadow-2xl shadow-LightModeBorder dark:shadow-DarkModeBorder">
              {regions.map((area) => (
                <p
                  key={area}
                  className="text-black dark:text-white mt-2 cursor-pointer hover:opacity-[.4]"
                  onClick={() => handelFillter(area)}
                >
                  {area}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
