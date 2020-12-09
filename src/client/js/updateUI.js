async function updateUI(pageData) {
  console.log("pageData", pageData);
  addTripDetails(pageData);
  addWeather(pageData);
  addCountryInfo(pageData);
}

async function addTripDetails(data) {
  const startDate = document.getElementById("startingDateInputText").value;
  const endDate = document.getElementById("endingDateInputText").value;
  document.getElementById("currentTripLocation").innerHTML =
    "Location: " + pageData.location.name;

  document.getElementById("currentTripDepart").innerHTML =
    "Depart: " + startDate;

  document.getElementById("currentTripReturn").innerHTML = "Return: " + endDate;

  document.getElementById("currentTripLocation").innerHTML =
    "Location: " + pageData.location.name;
  //   document.getElementById(
  //     "currentTripContainer"
  //   ).style.backgroundImage = `url(${pageData.pictures.weatherData.largeImageURL})`;

  //   document.getElementById("currentTripContainer").style.opacity = 0.3;
}

async function addWeather(data) {
  //add weather div
  //display weather for arrival
  //midway through and leaving
  const weatherArray = pageData.weather.weatherData.data;

  for (const day of weatherArray) {
    console.log(day);
  }
}

async function addCountryInfo(data) {
  console.log("This will add country info");
}

export { updateUI };
