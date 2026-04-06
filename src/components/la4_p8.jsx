import { useState } from "react";
import Header from "./la4_p8_header";
import Search from "./la4_p8_search";
import CountryList from "./la4_p8_countrylist";
import { searchCountries } from "../utils/countryApi";

function La4P8() {
  const [countries, setCountries] = useState([]);

  const handleSearch = async (name) => {
    const data = await searchCountries(name);
    setCountries(data);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <CountryList countries={countries} />
    </div>
  );
}

export default La4P8;