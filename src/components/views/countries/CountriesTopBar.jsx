const CountriesTopBar = ({ value, onChange }) => {
  return (
    <div className="countries-topbar box-shadow">
      <input
        type="text"
        value={value}
        placeholder="Search by country name"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CountriesTopBar;
