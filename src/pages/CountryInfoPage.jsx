import React from "react";
import { CountryCard } from "../component/CountryCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainPage } from "./MainPage";

export const CountryInfoPage = () => {
  // useState to hold all the country information
  const [country, setCountry] = useState([]);
  // state for search
  const [search, setSearch] = useState("");
  // state for fillter
  const [fillter, setFillter] = useState("");
  // state to hold coutries which was filltered
  const [contryFilter, setContryFilter] = useState([]);

  // function to perfrom the fet request
  const fetching = async () => {
    const responds = await fetch("https://restcountries.com/v3.1/all");
    const data = await responds.json();

    setCountry(data);
    setContryFilter(data)
  };


  const handelSearch = (value) => {
    console.log(value);

    setContryFilter(
      country.filter((cout) =>
        cout.name.common.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handelFillter = (value) => {
     setContryFilter(
       country.filter((cout) =>
         cout.continents[0].toLowerCase().includes(value.toLowerCase())
       )
     );
  };

  useEffect(() => {
    fetching();
  }, []);
  console.log(country);
  return (
    <div className="bg-DarkmodeBody w-full min-h-screen pt-12">
      <MainPage handelFillter={handelFillter} handelSearch={handelSearch} />
      <div className="container mx-auto mt-12  min-h-full px-2 md:px-0">
        <div className="grid md:gap-[1rem] md:gap-y-4 gap-y-3 xl:gap-[5rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
          {contryFilter.map((element) => (
            <Link key={element.name.common} to={`/${element.name.common}`}>
              <CountryCard
                name={element.name.official}
                population={element.population}
                region={element.region}
                capital={element.capital}
                img={element.flags.png}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
