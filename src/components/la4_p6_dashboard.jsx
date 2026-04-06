function Dashboard({ weather }) {
  if (!weather) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{weather.name}</h3>
      <p>Temperature: {weather.temp} °C</p>
      <p>Condition: {weather.desc}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind} m/s</p>
    </div>
  );
}

export default Dashboard;