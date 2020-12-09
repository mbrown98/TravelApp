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

export { addCountryInfo };
