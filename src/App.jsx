import React, { Component } from "react";
import "./App.css";
import theme from "./utils/theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Appbar from "./components/AppBar.jsx";
import RenderComponent from "./components/RenderBased.jsx";
// import sunny from "./images/weather-sunny.svg";
// import Button from "@material-ui/core/Button";

// import { fetchData  from "./utils/FetchAnyData";

class App extends Component {
  state = {
    tab: 0,
    lecture_url: String,
    default_url: "https://vorlesungsplan.dhbw-mannheim.de/",
    city: String,
    remember: false,
    temp: Number,
    weatherSrc: String,
    weatherCity: "Mannheim",
    latitude: Number,
    longitude: Number
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Appbar {...this.changingFunctions} {...this.state} />
          </header>
          <body className="App-content">
            <RenderComponent {...this.state} {...this.changingFunctions} />
            {/* <Button variant="contained" onClick={() => console.log("")}>
              Test Fetching
            </Button> */}
          </body>
        </div>
      </MuiThemeProvider>
    );
  }

  componentDidMount() {
    const lecture_url = localStorage.getItem("lecture_url")
      ? localStorage.getItem("lecture_url")
      : this.state.default_url;
    this.setState({ lecture_url });
  }

  changingFunctions = {
    changeTab: (event, tab) => {
      this.setState({ tab });
    },
    handleStorage: () => {
      const { lecture_url } = this.state;
      localStorage.setItem("lecture_url", lecture_url);
    },
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
export default App;
