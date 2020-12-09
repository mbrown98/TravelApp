import moment from "moment";

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

export { addTripDetails };
