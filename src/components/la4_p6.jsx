import { useState } from "react";
import Header from "./la4_p6_header";
import Search from "./la4_p6_search";
import Dashboard from "./la4_p6_dashboard";
import { getWeather } from "../utils/weatherApi";

function La4P6() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
  const data = await getWeather(city);
  if (data) setWeather(data);
};

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard weather={weather} />
    </div>
  );
}

export default La4P6;