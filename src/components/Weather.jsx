import React, { Component } from "react";
import celsiusImg from "../images/temperature-celsius.svg";
import weatherLogic from "../utils/WeatherLogic.jsx";

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
  render() {
    const { weatherSrc, temp } = this.props;
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
    weatherLogic({ ...this.props });
  }
}
