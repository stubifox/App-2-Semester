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
    remember: false
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
    }
  };
}
export default App;
