import React, { Component } from "react";
import celsiusImg from "../images/temperature-celsius.svg";
import weatherLogic from "../utils/WeatherLogic.js";
import theme from "../utils/theme.jsx";

const Temperature = props => {
  return (
    <div style={{ verticalAlign: "middle" }}>
      <div style={{ margin: "auto" }}>
        <h1>{props.weatherCity}</h1>
        <h1 style={{ color: "black" }}>
          {props.celsius}
          <img width="50ch" alt="celsius" src={celsiusImg} />
        </h1>
      </div>
    </div>
  );
};
export default class Weather extends Component {
  state = {
    temp: 0,
    weatherSrc: String,
    latitude: 0,
    longitude: 0
  };
  render() {
    const { weatherSrc, temp } = this.state;
    return (
      <div>
        <div>
          <img width="50ch" alt="weather" src={weatherSrc} />
          <Temperature celsius={Math.round(temp)} {...this.props} />
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
  componentWillReceiveProps(nextProps) {
    weatherLogic({
      ...{ ...this.changingFunctions },
      ...{ ...this.state },
      ...{ ...this.props },
      ...{ ...nextProps }
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
}
