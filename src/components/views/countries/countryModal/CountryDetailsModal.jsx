import Modal from "../../../modal/Modal";
import useOnEnter from "../../../../hooks/useOnEnter";
import useOnEscape from "../../../../hooks/useOnEscape";
import useGiveFocus from "../../../../hooks/useGiveFocus";
import CountryModalItam from "./CountryModalItam";

const CountryDetailsModal = ({
  setModalVisibility,
  country,
  confirmCallback,
}) => {
  const confirmHandler = () => {
    if (confirmCallback) confirmCallback();
    setModalVisibility(false);
  };

  const confirmBtnRef = useGiveFocus();
  useOnEnter(confirmHandler);
  useOnEscape(() => setModalVisibility(false));

  return (
    <Modal
      setModalVisibility={setModalVisibility}
      closeOnClickOutside={true}
      hasBackdrop={true}
      className="modal-confirm country-modal"
    >
      <div className="contents">
        <div>
          <img src={country.flag} alt={country.name} srcSet="" />
        </div>
        <div className="flex-1">
          <CountryModalItam label="Name" value={country.name} />
          <CountryModalItam
            label="Official Name"
            value={country.officialName}
          />
          <CountryModalItam label="Capital" value={country.capital} />
          <CountryModalItam label="Region" value={country.region} />
          <CountryModalItam label="Subregion" value={country.subregion} />
          <CountryModalItam
            label="Population"
            value={country.population}
            type="number"
          />
          <CountryModalItam
            label="Languages"
            value={country.languages}
            type="array"
          />
          <CountryModalItam
            label="Currencies"
            value={country.currencies}
            type="currency"
          />
          {/* <CountryModalItam
            label="IDD Codes"
            value={country.idd}
            type="array"
          /> */}
          <CountryModalItam label="Maps" value={country.maps} type="maps" />
        </div>
      </div>
      <div className="buttons">
        <button
          ref={confirmBtnRef}
          type="button"
          className="confirm"
          onClick={confirmHandler}
        >
          Okay
        </button>
      </div>
    </Modal>
  );
};

export default CountryDetailsModal;
