const geoNamesBase = "http://api.geonames.org/searchJSON?formatted=true&q=";
const geoNamesUser = "mbrown98";

function generateTrip() {
  const location = document.getElementById("locationInputText").value;
  const startDate = document.getElementById("startingDateInputText").value;
  const endDate = document.getElementById("endingDateInputText").value;
  getGeoData(location);
}

async function getGeoData(location) {
  const geoNamesURL = geoNamesBase + location + "&username=" + geoNamesUser;
  const response = await fetch(geoNamesURL);
  const responseJSON = await response.json();
  const locationData = responseJSON.geonames[0];
  console.log("ddd", locationData);
}

document.getElementById("generate").addEventListener("click", generateTrip);

export { generateTrip };
