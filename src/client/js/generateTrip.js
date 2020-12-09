import { updateUI } from "./updateUI";

const nodeServerURL = "http://localhost:8080";

async function generateTrip() {
  const location = document.getElementById("locationInputText").value;
  const departDay = document.getElementById("startingDateInputText").value;
  const returnDay = document.getElementById("endingDateInputText").value;

  if (location && departDay && returnDay) {
    console.log(departDay);
    getGeoData(location)
      .then((data) => {
        return getWeatherbitData(data);
      })
      .then((data) => {
        return getPixabayData(data);
      })
      .then((data) => {
        return getCountryInfo(data);
      })
      .then((pageData) => {
        updateUI(pageData);
      });
  } else {
    window.alert("Please enter Location, Start Date, and End Date");
  }
}

async function getGeoData(location) {
  const response = await fetch(nodeServerURL + "/geonamesData", {
    method: "POST",

    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ location: location }),
  });
  const responseJSON = await response.json();
  const locationData = responseJSON.locationData;
  return locationData;
}

async function getWeatherbitData(data) {
  const response = await fetch(nodeServerURL + "/weatherbitData", {
    method: "POST",

    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ data: data }),
  });
  const responseJSON = await response.json();
  const fullData = { location: data, weather: responseJSON };
  return fullData;
}

async function getPixabayData(data) {
  console.log("pix", data);
  const searchTerm = data.location.name;
  const response = await fetch(nodeServerURL + "/pixabayData", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchTerm: searchTerm }),
  });
  const responseJSON = await response.json();
  data.pictures = responseJSON;
  return data;
}

async function getCountryInfo(data) {
  const countryCode = data.location.countryCode;
  const response = await fetch(nodeServerURL + "/getCountryInfo", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ countryCode: countryCode }),
  });
  const responseJSON = await response.json();
  data.countryData = responseJSON;
  return data;
}

document.getElementById("generate").addEventListener("click", generateTrip);

export { generateTrip };
