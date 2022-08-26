import React, { useState, useEffect, useReducer } from "react";
import "./Countries.css";
import { getCountries } from "../../../services/countryService";
import LoadingSpinner from "./../../ui/LoadingSpinner";
import CountryList from "./CountryList";
import CountriesTopBar from "./CountriesTopBar";
import countryReducer, {
  startLoadingCountries,
  successtLoadingCountries,
  failedtLoadingCountries,
  INITIAL_COUNTRIES_STATE,
} from "../../../store/countryReducer";

const Countries = () => {
  const [countries, dispatch] = useReducer(
    countryReducer,
    INITIAL_COUNTRIES_STATE
  );

  const [filterText, setFilterText] = useState("");

  const loadCountries = async () => {
    dispatch(startLoadingCountries());
    try {
      const countries = await getCountries();
      dispatch(successtLoadingCountries(countries));
    } catch (error) {
      dispatch(failedtLoadingCountries(error));
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  /* Loading */
  if (countries.loading) {
    return <LoadingSpinner color="black" />;
  }

  /* Error */
  if (countries.error) {
    return (
      <div style={{ margin: "auto", textAlign: "center" }}>
        {countries.error.message} <br />
        <button onClick={loadCountries}>Load Again</button>
      </div>
    );
  }

  /* Country List */
  return (
    <>
      <CountriesTopBar value={filterText} onChange={setFilterText} />
      <CountryList countries={countries.data} filterText={filterText} />
    </>
  );
};

export default Countries;
