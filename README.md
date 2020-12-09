# Travel App

![screen-gif](./src/client/media/screen.gif)

## Overview

This travel app "TRIP" allows a user to enter a location, and the duration of their trip. This information is used to fetch and return data to the user regarding the weather during their trip, and key information about the country they are visiting.

A number of outside APIs are used in this project including: 1. Geonames API (used to determine longitude and latitude about the location) 2. Weatherbit API (used to fetch the 16 day weather forecast) 3. Pixabay API (used to fetch images that are unique to that location) 4. REST Countries API -- EXTRA STEP -- (used to fetch key facts about the country)

This project was built from scratch using Webpack, and does not use any front-end frameworks like React, Vue, etc

The back-end is a RESTful server using Express

## Instructions

npm install -- to install all dependencies

npm start -- to start server running on port 8080

npm run dev -- to start development server

npm run test -- run Jest testing suite
