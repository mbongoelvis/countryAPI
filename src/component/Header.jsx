import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Header = () => {
  const [DarkMode, setDarkmode] = useState(false);
  return (
    <div className="w-full sticky top-0 z-10 min-h-12 py-0 bg-DarkModeBgHeader flex items-center justify-center">
      <div className="container bg-DarkModeBg px-2 md:px-0 mx-auto h-12 my-2 flex items-center justify-between">
        <h1 className="text-white md:text-xl font-bold">Where in the world?</h1>
        <div
          className=" text-white cursor-pointer "
          onClick={() => setDarkmode(!DarkMode)}
        >
          {DarkMode ? (
            <div className="flex items-center gap-2 transition-all">
              <FaMoon />
              <p>Dark Mode</p>
            </div>
          ) : (
            <div className="transition-all flex items-center gap-2">
              <FaSun /> <p>Light Mode</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
