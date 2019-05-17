import React, { Component } from "react";
import "./App.css";
import theme from "./utils/theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Appbar from "./components/AppBar.jsx";
import RenderComponent from "./components/RenderBased.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  state = {
    tab: 0,
    weatherCity: "Mannheim",
    inputHandler: String,
    isLoading: false
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
          <Footer classes={theme} />
        </div>
      </MuiThemeProvider>
    );
  }

  changingFunctions = {
    changeTab: (event, tab) => {
      this.setState({ tab });
    },

    changeWeatherCity: () => {
      this.setState({
        weatherCity: encodeURI(this.state.inputHandler)
      });
    },
    handleInputChange: inputHandler => {
      this.setState({ inputHandler });
    },
    displayLoadingBar: timeout => {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, timeout);
      this.setState({ isLoading: true });
    }
  };
}
export default App;
