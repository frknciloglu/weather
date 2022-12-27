const url = "https://api.openweathermap.org/data/2.5";
const key = "b9050cba9e169f2e53a0e261c70740a9";

const setQuery = (e) => {
  if (e.keyCode === 13) {
    getResult(searchBar.value);
    res();
  }
};
const res = () => {
  searchBar.value = "";
};
const getResult = (cityName) => {
  res();
  let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (result) => {
  console.log(result);
  let city = document.querySelector(".city");
  city.innerHTML = `${result.name} / ${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(result.main.temp)}°C`;
  let desc = document.querySelector(".desc");
  desc.innerHTML = `${result.weather[0].description}`;
  let minMax = document.querySelector(".minmax");
  minMax.innerHTML = `${Math.round(result.main.temp_min)} /${Math.round(
    result.main.temp_max
  )} `;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
