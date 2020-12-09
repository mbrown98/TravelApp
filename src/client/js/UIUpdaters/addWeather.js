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

export { addWeather };
