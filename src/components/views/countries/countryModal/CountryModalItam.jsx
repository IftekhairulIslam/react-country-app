import React from "react";
import { numberFormat } from "./../../../../utilities/number";

const CountryModalItam = ({ label, value, type }) => {
  if (type === "array")
    return (
      <div>
        <strong>{label}:</strong>{" "}
        <i className="text-wrap">{value.toString()}</i>
      </div>
    );

  if (type === "currency")
    return (
      <div>
        <strong>{label}:</strong>{" "}
        <i>
          {value
            .map((currency) => {
              return currency.name + " (" + currency.symbol + ")";
            })
            .toString()}
        </i>
      </div>
    );

  if (type === "maps")
    return (
      <div>
        <strong>{label}:</strong>{" "}
        <i>
          <a href={value.googleMaps} target="_new">
            Google Maps
          </a>
          {", "}
          <a href={value.openStreetMaps} target="_new">
            Open Street Maps
          </a>
        </i>
      </div>
    );

  if (type === "number")
    return (
      <div>
        <strong>{label}:</strong> <i>{numberFormat(value)}</i>
      </div>
    );

  return (
    <div>
      <strong>{label}:</strong> <i>{value}</i>
    </div>
  );
};

export default CountryModalItam;
