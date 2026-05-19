import { useState } from "react";
const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const getWeather = async () => {
    let apiKey = "0b372a6e66a2c909756510c78c4a8538";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeather(data);
  };
  return (
    <div>
      <h1>React Weather App</h1>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp} °C</h3>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};
export default App;
