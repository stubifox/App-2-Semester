import React, { Component } from "react";
import celsiusImg from "../images/temperature-celsius.svg";
import weatherLogic from "../utils/WeatherLogic.js";

const Temperature = props => {
  const { displayCity, displayLocation } = props;
  return (
    <div style={{ verticalAlign: "middle" }}>
      <div style={{ margin: "auto" }}>
        {displayCity && <h1>{props.weatherCity}</h1>}
        {displayLocation && <h1>{props.coordinateCity}</h1>}
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
    temp: Number,
    weatherSrc: String,
    coordinateCity: String
  };
  render() {
    const { weatherSrc, temp } = this.state;
    return (
      <div>
        <div>
          <img width="50ch" alt="weather" src={weatherSrc} />
          <Temperature
            celsius={Math.round(temp)}
            {...this.props}
            {...this.state}
          />
        </div>
      </div>
    );
  }
  async componentDidMount() {
    await weatherLogic({
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
    setCoordinateCity: coordinateCity => {
      this.setState({ coordinateCity });
    }
  };
}
