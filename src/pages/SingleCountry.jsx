import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa"

export const SingleCountry = () => {
    // useState to hold all the country information
      const [countryInfo, setCountryInfo] = useState([]);
  const { country } = useParams();

    console.log(countryInfo);

  // function to perfrom the fet request
  const fetching = async () => {
    const responds = await fetch(
      `https://restcountries.com/v3.1/name/${country.toLowerCase()}`
    );
    const data = await responds.json();

    setCountryInfo(data);
  };

  useEffect(() => {
    fetching();
  }, []);
    return (
      <div className="w-full h-screen bg-DarkmodeBody pt-12">
        <div className="container mx-auto">
          <Link to={"/"} className="flex bg-DarkModeBgHeader py-2 min-w-12">
            <FaArrowLeft />
            <p>Back</p>
          </Link>
        </div>
      </div>
    );
}
