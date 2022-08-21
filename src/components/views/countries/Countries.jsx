import React, { useState, useEffect } from "react";
import "./Countries.css";
import { getCountries } from "../../../services/countryService";
import LoadingSpinner from "./../../ui/LoadingSpinner";
import CountryList from "./CountryList";
import CountriesTopBar from "./CountriesTopBar";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countriesError, setCountriesError] = useState(null);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [filterText, setFilterText] = useState("");

  const loadCountries = async () => {
    setLoadingCountries(true);
    setCountriesError(null);
    try {
      const countries = await getCountries();
      setCountries(countries);
    } catch (error) {
      setCountriesError(error);
    }
    setLoadingCountries(false);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  /* Loading */
  if (loadingCountries) {
    return <LoadingSpinner color="black" />;
  }

  /* Error */
  if (countriesError) {
    return (
      <div style={{ margin: "auto", textAlign: "center" }}>
        {countriesError.message} <br />
        <button onClick={loadCountries}>Load Again</button>
      </div>
    );
  }

  /* Country List */
  return (
    <>
      <CountriesTopBar value={filterText} onChange={setFilterText} />
      <CountryList countries={countries} filterText={filterText} />
    </>
  );
};

export default Countries;
