import CountryCard from "./la4_p8_countrycard";

function CountryList({ countries }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      justifyContent: "center"
    }}>
      {countries.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
    </div>
  );
}

export default CountryList;