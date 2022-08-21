import CountryItem from "./CountryItem";

const CountryList = ({ countries, filterText }) => {
  return (
    <div className="country-list">
      {countries
        .filter((country) =>
          country.name.toLowerCase().includes(filterText.toLowerCase())
        )
        .map((country, key) => (
          <CountryItem country={country} key={key} />
        ))}
    </div>
  );
};

export default CountryList;
