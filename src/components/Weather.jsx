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
    const { weatherSrc, temp } = this.state;
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
    weatherLogic(
      { ...this.changingFunctions },
      { ...this.state },
      { ...this.props }
    );
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
}
