const API_KEY = "cf1ba5f58e387b782d26fd5c29ad4664";

export const getWeather = async (city) => {
  const res = await fetch(`https://wttr.in/${city}?format=j1`);
  const data = await res.json();

  return {
    name: city,
    temp: data.current_condition[0].temp_C,
    desc: data.current_condition[0].weatherDesc[0].value,
    humidity: data.current_condition[0].humidity,
    wind: data.current_condition[0].windspeedKmph
  };
};