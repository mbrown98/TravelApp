import { directive } from "@babel/types";
import moment from "moment";

async function updateUI(pageData) {
  console.log("pageData", pageData);
  addTripDetails(pageData);
  addWeather(pageData);
  addCountryInfo(pageData);
}

async function addTripDetails(data) {
  const tripDetailsContainer = document.getElementById("tripDetails");

  const detailsHeader = document.createElement("h1");
  detailsHeader.innerHTML = "Trip Details";
  detailsHeader.style.backgroundColor = "#87adde";
  detailsHeader.style.padding = "10px";
  detailsHeader.style.borderRadius = "10px";
  detailsHeader.style.width = "fit-content";
  tripDetailsContainer.insertAdjacentElement("afterbegin", detailsHeader);

  const tripLogistics = document.getElementById("tripLogistics");
  tripLogistics.style.backgroundColor = "#deb887";
  tripLogistics.style.width = "fit-content";
  tripLogistics.style.margin = "10px";
  tripLogistics.style.padding = "5px";
  tripLogistics.style.fontSize = "20px";
  tripLogistics.style.borderRadius = "10px";

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
    "Trip Starts " + timeUntilTrip;

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

  for (const day of weatherArray) {
    const weatherCard = document.createElement("div");
    let cardContent = `<p>Day: ${day.valid_date}</p><p>Average Temp: ${day.temp}</p><p>Chance of Precipitation: ${day.pop}%</p>`;
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
}

async function addCountryInfo(data) {
  console.log("This will add country info");
}

export { updateUI };
