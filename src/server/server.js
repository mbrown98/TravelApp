const geoNamesBase = "http://api.geonames.org/searchJSON?formatted=true&q=";
const geoNamesUser = "mbrown98";

const weatherbitAPIKey = "ab52817cb9374b82af15c1cd2179fa37";
const weatherbitBaseURL = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";

const pixabayKey = "19450151-fc766a8911e68f3e4051bc05f";

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
// app.use(express.static("website"));
app.use(express.static("dist"));

const port = 8080;
// Setup Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/data", function (req, res) {
  //sends back current state of projectData

  res.send(projectData);
});

app.post("/geonamesData", async function (req, res) {
  const location = req.body.location;
  const geoNamesURL = geoNamesBase + location + "&username=" + geoNamesUser;
  const response = await axios.get(geoNamesURL);
  const locationData = response.data.geonames[0];
  res.send({ locationData: locationData });
});

app.post("/weatherbitData", async function (req, res) {
  const lat = req.body.data.lat;
  const long = req.body.data.lng;
  const response = await axios.get(
    weatherbitBaseURL +
      lat +
      "&lon=" +
      long +
      "&units=I&key=" +
      weatherbitAPIKey
  );
  res.send({ weatherData: response.data });
});

app.post("/pixabayData", async function (req, res) {
  const searchTerm = req.body.searchTerm;
  var URL =
    "https://pixabay.com/api/?key=" +
    pixabayKey +
    "&q=" +
    encodeURIComponent(searchTerm);
  const response = await axios.get(URL);

  res.send({ weatherData: response.data.hits[0] });
});

app.post("/getCountryInfo", async function (req, res) {
  const countryCode = req.body.countryCode;
  console.log("CC", countryCode);

  const response = await axios.get(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  );
  console.log(response.data);

  res.send({ countryData: response.data });
});
