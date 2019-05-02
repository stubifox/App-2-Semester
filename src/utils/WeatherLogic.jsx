import sunny from "../images/weather-sunny.svg";
import cloudy from "../images/weather-cloudy.svg";
import partlyCloudy from "../images/weather-partlycloudy.svg";
import rainy from "../images/weather-rainy.svg";
import snowy from "../images/weather-snowy.svg";
import pouring from "../images/weather-pouring.svg";
import lightning from "../images/weather-lightning.svg";
import foggy from "../images/weather-fog.svg";
import fetchData from "./FetchAnyData";

const WeatherLogic = props => {
  console.log(props);
  const { changeWeatherState, changeTemperature, weatherCity } = props;
  const setWeatherConditionSrcByIconId = iconId => {
    //states.map(x => x.ids).forEach;
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
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${weatherCity}&units=metric&appid=79047fef23db38e4c89c429996909801`;
  fetchData(url, false)
    .then(data => {
      changeTemperature(data.list[0].main.temp_max);
      setWeatherConditionSrcByIconId(data.list[0].weather[0].icon);
    })
    .catch(err => Error(err));
};

export default WeatherLogic;
