import { addTripDetails } from "./UIUpdaters/addTripDetails";
import { addWeather } from "./UIUpdaters/addWeather";
import { addCountryInfo } from "./UIUpdaters/addCountryInfo";

async function updateUI(pageData) {
  try {
    addTripDetails(pageData);
    addCountryInfo(pageData);
    addWeather(pageData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { updateUI };
