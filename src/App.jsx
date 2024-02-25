import { useState } from "react";
import "./App.css";
import { Header } from "./component/Header";
import { Routes, Route } from "react-router-dom";
import { CountryInfoPage } from "./pages/CountryInfoPage";
import { SingleCountry } from "./pages/SingleCountry";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<CountryInfoPage />} />
        <Route path="/:country" exact element={<SingleCountry />} />
      </Routes>
    </>
  );
}

export default App;
