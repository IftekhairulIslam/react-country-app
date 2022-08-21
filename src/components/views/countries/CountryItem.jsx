import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CountryDetailsModal from "./countryModal/CountryDetailsModal";

const CountryItem = ({ country }) => {
  const [showCountryModal, setShowCountryModal] = useState();

  return (
    <>
      <div
        className="country-item box-shadow"
        onClick={() => setShowCountryModal(true)}
      >
        <div>
          <img src={country.flag} alt={country.name} srcSet="" />
        </div>
        <div>
          {country.name} <br />
          {country.officialName} <br />
        </div>
      </div>

      <AnimatePresence>
        {showCountryModal && (
          <CountryDetailsModal
            setModalVisibility={setShowCountryModal}
            country={country}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CountryItem;
