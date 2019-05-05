import sunny from "../images/weather-sunny.svg";
import cloudy from "../images/weather-cloudy.svg";
import partlyCloudy from "../images/weather-partlycloudy.svg";
import rainy from "../images/weather-rainy.svg";
import snowy from "../images/weather-snowy.svg";
import pouring from "../images/weather-pouring.svg";
import lightning from "../images/weather-lightning.svg";
import foggy from "../images/weather-fog.svg";
import fetchData from "./FetchAnyData";

const weatherLogic = async props => {
  const API_KEY = "a9f5769786f635c0fd56e2e3564faefc";

  const {
    changeWeatherState,
    changeTemperature,
    weatherCity,
    displayLocation,
    displayCity,
    setCoordinateCity
  } = props;

  if (displayCity) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&APPID=${API_KEY}`;
    fetchData(url, false)
      .then(data => {
        changeTemperature(data.main.temp_max);
        setWeatherConditionSrcByIconId(data.weather[0].icon);
      })
      .catch(err => Error(err));
  }

  if (displayLocation) {
    if (!navigator.geolocation) {
      throw Error("Geolocation is not supported");
    } else {
      console.log("Getting current location...");
      navigator.geolocation.watchPosition(
        position => {
          const url = `http://api.openweathermap.org/data/2.5/weather?lat=${
            position.coords.latitude
          }&lon=${position.coords.longitude}&units=metric&APPID=${API_KEY}`;
          fetchData(url, false)
            .then(data => {
              console.log(data);
              setCoordinateCity(data.name);
              changeTemperature(data.main.temp_max);
              setWeatherConditionSrcByIconId(data.weather[0].icon);
            })
            .catch(err => Error(err));
        },
        err => {
          throw Error(`Can't get current location: ${err.message}`);
        }
      );
    }
  }

  const setWeatherConditionSrcByIconId = iconId => {
    switch (iconId) {
      case "01d":
      case "01n":
        changeWeatherState(sunny);
        break;

      case "02d":
      case "02n":
      case "04d":
      case "04n":
        changeWeatherState(partlyCloudy);
        break;

      case "03d":
      case "03n":
        changeWeatherState(cloudy);
        break;

      case "09d":
      case "09n":
        changeWeatherState(rainy);
        break;

      case "10d":
      case "10n":
        changeWeatherState(pouring);
        break;

      case "11d":
      case "11n":
        changeWeatherState(lightning);
        break;

      case "13d":
      case "13n":
        changeWeatherState(snowy);
        break;

      case "50d":
      case "50n":
        changeWeatherState(foggy);
        break;

      default:
        changeWeatherState(sunny);
        break;
    }
  };
};

export default weatherLogic;
