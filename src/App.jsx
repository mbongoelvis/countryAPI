import { useState } from "react";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import { CountryInfoPage } from "./pages/CountryInfoPage";
import { SingleCountry } from "./pages/SingleCountry";

function App() {
  const [DarkMode, setDarkmode] = useState(false);

  return (
    <div className={DarkMode ? "dark" : ``}>
      <div className="class w-full sticky top-0 z-10 min-h-12 py-0 dark:bg-DarkModeBgHeader bg-LightmodeBgHeader flex items-center justify-center">
        <div className="container bg-DarkModeBg px-2 md:px-0 mx-auto h-12 my-2 flex items-center justify-between">
          <h1 className="dark:text-white text-black md:text-xl font-bold">
            Where in the world?
          </h1>
          <div
            className=" dark:text-white text-black cursor-pointer "
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
      <Routes>
        <Route path="/" exact element={<CountryInfoPage />} />
        <Route path="/:country" exact element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
