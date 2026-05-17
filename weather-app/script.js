let cityInput = document.getElementById("city");
let result = document.getElementById("result");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});
async function getWeather() {
  try {
    let city = cityInput.value;
    let apiKey = "0b372a6e66a2c909756510c78c4a8538";
    result.innerHTML = `
    <div class="spinner"></div>
    <h3>Loading...</h3>
`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    
    if (data.cod != 200) {
      result.innerHTML = "<h3>City Not Found</h3>";
      return;
    }
    let weatherType = data.weather[0].main;
    if (weatherType == "Clear") {
      document.body.style.backgroundColor = "skyblue";
    } else if (weatherType == "Clouds") {
      document.body.style.backgroundColor = "gray";
    } else if (weatherType == "Rain") {
      document.body.style.backgroundColor = "darkblue";
    } else {
      document.body.style.backgroundColor = "#87CEEB";
    }
    let icon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    result.innerHTML = `

        <h2>${data.name}</h2>

        <img src="${iconUrl}">

        <h3>${data.main.temp} °C</h3>

        <p>Humidity: ${data.main.humidity}%</p>

        <p>Weather: ${data.weather[0].description}</p>

    `;
  } catch (error) {
    result.innerHTML = "<h3>Error Fetching Data</h3>";
    console.log(error);
  }
}
