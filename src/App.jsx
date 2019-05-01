import React, { Component } from "react";
import "./App.css";
import theme from "./utils/theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Appbar from "./components/AppBar.jsx";
import RenderComponent from "./components/RenderBased.jsx";
import Button from "@material-ui/core/Button";
// import { fetchData  from "./utils/FetchAnyData";

class App extends Component {
  state = {
    tab: 0,
    lecture_url: String,
    default_url: "https://vorlesungsplan.dhbw-mannheim.de/",
    city: String,
    remember: false
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Appbar {...this.changingFunctions} {...this.state} />
        <div className="App">
          <header className="App-header">
            <RenderComponent {...this.state} />
            {/* <Button variant="contained" onClick={() => console.log("")}>
              Test Fetching
            </Button> */}
          </header>
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
    }
  };
}

export default App;
