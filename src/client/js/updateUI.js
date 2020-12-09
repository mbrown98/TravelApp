import { directive } from "@babel/types";
import moment from "moment";

async function updateUI(pageData) {
  console.log("pageData", pageData);
  addTripDetails(pageData);
  addCountryInfo(pageData);
  addWeather(pageData);
}

async function addTripDetails(data) {
  const tripDetailsContainer = document.getElementById("tripDetails");

  const startDate = document.getElementById("startingDateInputText").value;
  const endDate = document.getElementById("endingDateInputText").value;
  const dayA = moment(startDate, "YYYY-MM-DD");
  const dayB = moment(endDate, "YYYY-MM-DD");
  const today = moment().format("YYYY-MM-DD");
  const timeUntilTrip = moment(startDate, "YYYY-MM-DD").fromNow();
  const tripDuration = dayB.diff(dayA, "days") + " days";

  document.getElementById("currentTripLocation").innerHTML =
    "Location: " + data.location.name;

  document.getElementById("currentTripDepart").innerHTML =
    "Depart: " + startDate;

  document.getElementById("currentTripReturn").innerHTML = "Return: " + endDate;

  document.getElementById("currentTripDuration").innerHTML =
    "Trip is lasting " + tripDuration;

  document.getElementById("currentTripTimeUntil").innerHTML =
    "Trip starts " + timeUntilTrip;

  document.getElementById("currentTripLocation").innerHTML =
    "Location: " + data.location.name;
  document.getElementById(
    "currentTripContainer"
  ).style.backgroundImage = `url(${data.pictures.weatherData.largeImageURL})`;
}

async function addWeather(data) {
  const weatherArray = data.weather.weatherData.data;

  const weatherContainer = document.getElementById("weatherContainer");
  weatherContainer.innerHTML = "";

  const weatherHeader = document.createElement("h1");
  weatherHeader.innerHTML = "Weather";
  weatherHeader.style.backgroundColor = "#87adde";
  weatherHeader.style.padding = "10px";
  weatherHeader.style.borderRadius = "10px";
  weatherHeader.style.width = "fit-content";
  weatherContainer.appendChild(weatherHeader);

  const startDate = document.getElementById("startingDateInputText").value;
  const endDate = document.getElementById("endingDateInputText").value;

  let weatherMap = false;

  for (const day of weatherArray) {
    if (startDate === day.valid_date) weatherMap = true;

    if (weatherMap) {
      const weatherCard = document.createElement("div");
      let cardContent = `<p>Day: ${day.valid_date}</p><p>Average Temp: ${day.temp} F</p><p>Chance of Precipitation: ${day.pop}%</p>`;
      weatherCard.innerHTML = cardContent;
      weatherCard.style.backgroundColor = "#deb887";
      weatherCard.style.width = "fit-content";
      weatherCard.style.float = "left";
      weatherCard.style.margin = "10px";
      weatherCard.style.padding = "5px";
      weatherCard.style.fontSize = "12px";
      weatherCard.style.borderRadius = "10px";
      weatherContainer.appendChild(weatherCard);
    }
    if (endDate === day.valid_date) break;
  }
}

async function addCountryInfo(data) {
  const countryData = data.countryData.countryData;

  // document.getElementById(
  //   "titleBox"
  // ).style.background = `url(${countryData.flag})`;

  const countryInfoContainer = document.getElementById("countryInfo");
  countryInfoContainer.innerHTML = "";

  const countryInfoHeader = document.createElement("h1");
  countryInfoHeader.innerHTML = "Country Info";
  countryInfoHeader.style.backgroundColor = "#87adde";
  countryInfoHeader.style.padding = "10px";
  countryInfoHeader.style.borderRadius = "10px";
  countryInfoHeader.style.width = "fit-content";
  countryInfoContainer.appendChild(countryInfoHeader);

  const countryDataArray = [
    { name: "Currency", value: countryData.currencies },
    { name: "Capital", value: countryData.capital },
    { name: "Population", value: countryData.population },
    { name: "Languages", value: countryData.languages },
    { name: "Region", value: countryData.region },
    { name: "Borders", value: countryData.borders },
  ];

  for (const info of countryDataArray) {
    const infoCard = document.createElement("div");
    let cardContent = `<div>${info.name}: ${
      Array.isArray(info.value)
        ? infoArrayFunc(info.value, info.name)
        : info.value
    }</div>`;
    infoCard.innerHTML = cardContent;
    infoCard.style.backgroundColor = "#deb887";
    infoCard.style.width = "fit-content";

    infoCard.style.margin = "10px";
    infoCard.style.padding = "5px";
    infoCard.style.fontSize = "20px";
    infoCard.style.borderRadius = "10px";
    countryInfoContainer.appendChild(infoCard);
  }
}

function infoArrayFunc(array, name) {
  if (name === "Borders") {
    return array.map((entry) => entry);
  }
  if (name === "Languages") {
    return array.map((entry) => entry.name);
  }
  if (name === "Currency") {
    return array.map((entry) => entry.name);
  }
}

export { updateUI };
