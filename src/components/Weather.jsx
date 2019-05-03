import React, { Component } from "react";
import celsiusImg from "../images/temperature-celsius.svg";
import weatherLogic from "../utils/WeatherLogic.js";

const Temperature = props => {
  return (
    <div style={{ verticalAlign: "middle" }}>
      <div style={{ margin: "auto" }}>
        <h1>{props.celsius}</h1>
        <img src={celsiusImg} alt="celcius" />
      </div>
    </div>
  );
};
export default class Weather extends Component {
  state = {
    temp: Number,
    weatherSrc: String,
    weatherCity: "Landau%20in%20der%20Pfalz",
    latitude: Number,
    longitude: Number
  };
  render() {
    const { weatherSrc, temp, displayLocation } = this.state;

    if (displayLocation) {
      this.getLocation()
        .then(loc =>
          this.changingFunctions.setWeatherLocation(loc.latitude, loc.longitude)
        )
        .catch(err => console.log(err));
    }
    return (
      <div>
        <div>
          <img alt="weather" src={weatherSrc} />
          <Temperature celsius={Math.round(temp)} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    weatherLogic({
      ...{ ...this.changingFunctions },
      ...{ ...this.state },
      ...{ ...this.props }
    });
  }

  changingFunctions = {
    changeWeatherState: weatherSrc => {
      this.setState({ weatherSrc });
    },
    changeTemperature: temp => {
      this.setState({ temp });
    },
    setWeatherLocation: (latitude, longitude) => {
      this.setState({ latitude, longitude });
    }
  };
  getLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation is not supported");
      } else {
        console.log("Getting current location...");

        navigator.geolocation.watchPosition(
          position => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          err => {
            reject(`Can't get current location: ${err.message}`);
          }
        );
      }
    });
  };
}
