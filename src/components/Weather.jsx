import React, { Component } from "react";
import celsiusImg from "../images/temperature-celsius.svg";
import handleData, { getLocation } from "../utils/WeatherLogic.js";

const Temperature = props => {
  const { displayCity, displayLocation } = props;
  return (
    <div style={{ verticalAlign: "middle" }}>
      <div style={{ margin: "auto" }}>
        {displayCity && <h1>{props.dataCity}</h1>}
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
    coordinateCity: String,
    latitude: undefined,
    longitude: undefined,
    dataCity: String
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

  componentDidMount() {
    if (this.props.displayLocation) {
      getLocation(this.changingFunctions.setCoordinates);
    }
    if (this.props.displayCity) {
      this.getWeatherData(this.state, this.props);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.weatherCity !== this.props.weatherCity) {
      this.getWeatherData(this.state, this.props);
    }
    if (prevState.latitude !== this.state.latitude) {
      this.getWeatherData(this.state, this.props);
    }
  }

  getWeatherData = (states, props) => {
    const params = {
      ...{ ...this.changingFunctions },
      ...{ ...states },
      ...{ ...props }
    };
    handleData(params);
  };

  changingFunctions = {
    changeWeatherState: weatherSrc => {
      this.setState({ weatherSrc });
    },
    changeTemperature: temp => {
      this.setState({ temp });
    },
    setCoordinateCity: coordinateCity => {
      this.setState({ coordinateCity });
    },
    setCoordinates: (latitude, longitude) => {
      this.setState({ latitude, longitude });
    },
    setDataCity: dataCity => {
      this.setState({ dataCity });
    }
  };
}
