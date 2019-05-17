import React, { Component } from "react";
import celsiusImg from "../images/temperature-celsius.svg";
import handleData, { getLocation } from "../utils/WeatherLogic.js";
import CardFramework from "./CardFramework.jsx";

const Temperature = props => {
  const {
    displayCity,
    weatherSrc,
    dataCity,
    coordinateCity,
    celsius,
    background
  } = props;
  return (
    <div style={{ verticalAlign: "middle" }}>
      <div style={{ margin: "auto" }}>
        <CardFramework
          city={displayCity ? dataCity : coordinateCity}
          temperature={celsius}
          celsiusImg={celsiusImg}
          weatherSrc={weatherSrc}
          background={background}
        />
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
    dataCity: String,
    background: String
  };

  render() {
    const { temp } = this.state;

    return (
      <div>
        <div>
          <Temperature
            celsius={Math.round(temp)}
            {...this.props}
            {...this.state}
          />
        </div>
      </div>
    );
  }
  componentWillMount() {
    this.props.displayLoadingBar(500);
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
    },
    changeWeatherBackground: background => {
      this.setState({ background }, () =>
        console.log(`background in State ${background}`)
      );
    }
  };
}
