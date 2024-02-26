import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const SingleCountry = () => {
  const [countryData, setCountryInfo] = useState([]);
  const { country } = useParams();

  // useEffect(() => {
  //   // Cleanup function to clear countryData before fetching new data
  //   return () => {
  //     setCountryInfo([]);
  //   };
  // }, [country]);

  useEffect(() => {
    fetchingCountry();
  }, [country]);

  const fetchingCountry = async () => {
    try {
      const responds = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const Data = await responds.json();
      setCountryInfo(Data);
    } catch (err) {
      console.error(err);
    }
  };


  if (countryData.length === 0) {
    return (<p className="w-full h-screen items-center justify-center">Loading...</p>);
  }

  const countryInfo = countryData[0];
  const borders = countryInfo.borders
  const language = countryInfo.languages;


  return (
    <div className="w-full min-h-[93vh] dark:bg-DarkmodeBody bg-LightmodeBgBody pt-12">
      <div className="container mx-auto pl-2">
        <Link
          to={"/"}
          className="flex dark:bg-DarkmodeBody bg-LightmodeBgBody shadow-sm shadow-LightModeBorder dark:shadow-DarkModeBorder py-2 px-5 w-[8rem] items-center gap-5 text-black dark:text-white rounded"
        >
          <FaArrowLeft />
          <p>Back</p>
        </Link>

        {/* main card section */}
        <div className="w-full h-[80%] mt-[6rem] grid grid-cols-1 lg:grid-cols-2 gap-[4rem]">
          <div className="w-full h-full shadow-LightModeBorder dark:shadow-DarkModeBorder">
            <img
              src={countryInfo.flags.png}
              alt=""
              className="object-fit w-full h-full"
            />
          </div>
          <div className="py-[5rem]">
            <h1 className="text-black dark:text-white font-bold text-2xl">
              {countryInfo.name.common}
            </h1>
            <div className="mt-7 text-black dark:text-white font-bold flex flex-col md:flex-row justify-between">
              <div>
                <p className="mb-1">
                  Native Name:
                  <span className="font-thin">
                    {" "}
                    {countryInfo.name.official}
                  </span>
                </p>
                <p className="mb-1">
                  Population:
                  <span className="font-thin">{countryInfo.population}</span>
                </p>
                <p className="mb-1">
                  Region:
                  <span className="font-thin"> {countryInfo.region} </span>
                </p>
                <p className="mb-1">
                  Sub Region:
                  <span className="font-thin"> {countryInfo.subregion} </span>
                </p>
                <p className="mb-1">
                  Capital:
                  <span className="font-thin"> {countryInfo.capital} </span>
                </p>
              </div>
              <div>
                <p className="mb-1">
                  Top Level Domain:
                  <span className="font-thin"> {countryInfo.tld[0]}</span>
                </p>
                <p className="mb-1">
                  Currency:
                  <span className="font-thin">
                    {countryInfo?.currencies.name == "XOF"
                      ? countryInfo.currencies.name.XOF
                      : ""}
                  </span>
                </p>
                <p>
                  Langauge:
                  <span className="font-thin">
                    {typeof language === "string" ? (
                      <p>{language}</p>
                    ) : (
                      Object.entries(language).map(([key, value]) => (
                        <p key={key}>{value}</p>
                      ))
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-5">
              <p className="text-black dark:text-white font-bold">
                Border Countres:
              </p>
              <div className="flex gap-2 flex-wrap">
                {borders ? (
                  borders.length === 0 ? (
                    <p>No border countries</p>
                  ) : (
                    borders.map((border) => (
                      <p
                        className="bg-DarkModeBgHeader text-white font-thin px-4 rounded shadow-sm shadow-gray-700"
                        key={border}
                      >
                        {border}
                      </p>
                    ))
                  )
                ) : (
                  <p className="text-black dark:text-white">No borders</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
