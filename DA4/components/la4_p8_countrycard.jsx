function CountryCard({ country }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      width: "200px"
    }}>
      <img
        src={country.flags?.png}
        alt="flag"
        style={{ width: "100%" }}
      />
      <h4>{country.name.common}</h4>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </div>
  );
}

export default CountryCard;