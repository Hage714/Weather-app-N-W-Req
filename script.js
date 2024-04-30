//creating an object for storing the fxns and variables necessary for using API
let weather = {
  apiKey: "1c6c03289bcfd42742c375957667cb29",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  //function to display the weather data
  
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".city").innerHTML = "Weather in " + name; //displaying the info on the page
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "m/s";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

weather.fetchWeather("nairobi")

//search bar
document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});
document.querySelector(".search-bar").addEventListener("click", function (event) {
if (event.key == "Enter") {
  weather.search();
}
});