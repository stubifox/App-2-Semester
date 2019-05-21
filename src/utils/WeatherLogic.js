import sunny from "../images/weather-sunny.svg";
import cloudy from "../images/weather-cloudy.svg";
import partlyCloudy from "../images/weather-partlycloudy.svg";
import rainy from "../images/weather-rainy.svg";
import snowy from "../images/weather-snowy.svg";
import pouring from "../images/weather-pouring.svg";
import lightning from "../images/weather-lightning.svg";
import foggy from "../images/weather-fog.svg";
import fetchData from "./FetchAnyData";
import cloudBackground from "../images/clouds.png";
import rainyBackground from "../images/rain.png";
import sunnyBackground from "../images/sunny.png";
import foggyBackground from "../images/foggy.png";
import thunderBackground from "../images/thunder.png";
import snowyBackground from "../images/snowy.png";

export const getLocation = setCoordinates => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported");
  } else {
    console.log("Getting current location...");
    navigator.geolocation.watchPosition(
      position => {
        setCoordinates(position.coords.latitude, position.coords.longitude);
      },
      err => {
        console.error(`Can't get current location: ${err.message}`);
      }
    );
  }
};

const makeAPICallAndReturnData = async props => {
  const API_KEY = "a9f5769786f635c0fd56e2e3564faefc";
  const apiCallUrl = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?${await getTypeOfCall(
    props
  )}&units=metric&APPID=${API_KEY}`;
  return fetchData(apiCallUrl, false);
};

const getTypeOfCall = props => {
  const {
    displayCity,
    displayLocation,
    weatherCity,
    latitude,
    longitude
  } = props;

  if (displayCity) {
    return `q=${weatherCity}`;
  } else if (displayLocation) {
    return `lat=${latitude}&lon=${longitude}`;
  }
};

const setWeatherIcon = (
  iconId,
  changeWeatherState,
  changeWeatherBackground
) => {
  switch (iconId) {
    case "01d":
    case "01n":
      changeWeatherState(sunny);
      changeWeatherBackground(sunnyBackground);

      break;

    case "02d":
    case "02n":
    case "04d":
    case "04n":
      changeWeatherState(partlyCloudy);
      changeWeatherBackground(cloudBackground);
      break;

    case "03d":
    case "03n":
      changeWeatherState(cloudy);
      changeWeatherBackground(cloudBackground);
      break;

    case "09d":
    case "09n":
      changeWeatherState(rainy);
      changeWeatherBackground(rainyBackground);
      break;

    case "10d":
    case "10n":
      changeWeatherState(pouring);
      changeWeatherBackground(rainyBackground);

      break;

    case "11d":
    case "11n":
      changeWeatherState(lightning);
      changeWeatherBackground(thunderBackground);

      break;

    case "13d":
    case "13n":
      changeWeatherState(snowy);
      changeWeatherBackground(snowyBackground);

      break;

    case "50d":
    case "50n":
      changeWeatherState(foggy);
      changeWeatherBackground(foggyBackground);
      break;

    default:
      changeWeatherState(sunny);
      changeWeatherBackground(sunnyBackground);
      break;
  }
};

const handleData = async props => {
  const {
    displayLocation,
    changeTemperature,
    setCoordinateCity,
    changeWeatherState,
    setDataCity,
    displayCity,
    latitude,
    changeWeatherBackground
  } = props;
  const data = await makeAPICallAndReturnData(props);
  if (displayLocation && latitude !== undefined) {
    setCoordinateCity(data.name);
  }
  if (displayCity) {
    setDataCity(data.name);
  }
  try {
    setWeatherIcon(
      data.weather[0].icon,
      changeWeatherState,
      changeWeatherBackground
    );
    changeTemperature(data.main.temp_max);
  } catch (error) {
    console.error(error);
  }
};

export default handleData;
