let cityInput = document.getElementById("city");
let result = document.getElementById("result");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",getWeather);

cityInput.addEventListener("keydown",function(event){
    if(event.key === "Enter") {
        getWeather();
    }
});
async function getWeather(){

    try {
        let city = cityInput.value;
        let apiKey = "0b372a6e66a2c909756510c78c4a8538";
        result.innerHTML = "<h3>Loading....<h3/>";
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        if(data.cod != 200) {
            result.innerHTML = "<h3>City Not Found</h3>";
            return;
        }
        result.innerHTML = `

        <h2>${data.name}</h2>

        <h3>${data.main.temp} °C</h3>

        <p>Humidity: ${data.main.humidity}%</p>

        <p>Weather: ${data.weather[0].description}</p>

    `;
    }
    catch(error){
        result.innerHTML = "<h3>Error Fetching Data</h3>";
        console.log(error);
    }  
}