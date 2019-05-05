import React, { Component } from "react";
import "./App.css";
import theme from "./utils/theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Appbar from "./components/AppBar.jsx";
import RenderComponent from "./components/RenderBased.jsx";

class App extends Component {
  state = {
    tab: 0,
    lecture_url: String,
    default_url: "https://vorlesungsplan.dhbw-mannheim.de/",
    remember: false,
    weatherCity: "Mannheim",
    inputHandler: String
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
    changeWeatherCity: () => {
      this.setState(
        {
          weatherCity: encodeURI(this.state.inputHandler)
        },
        () => console.log(this.state.weatherCity)
      );
    },
    handleInputChange: event => {
      this.setState(
        { inputHandler: event.target.value },
        console.log(this.state.inputHandler)
      );
    }
  };
}
export default App;
