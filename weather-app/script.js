async function getWeather(){
    let city = document.getElementById("city").value;
    let apiKey = "0b372a6e66a2c909756510c78c4a8538";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    document.getElementById("result").innerHTML = `

        <h2>${data.name}</h2>

        <h3>${data.main.temp} °C</h3>

        <p>Humidity: ${data.main.humidity}%</p>

        <p>Weather: ${data.weather[0].description}</p>

    `;
}