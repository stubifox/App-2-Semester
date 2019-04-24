import React, { Component } from "react";
import "./App.css";
import theme from "./theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Appbar from "./components/AppBar.jsx";
import RenderComponent from "./components/RenderBased.jsx";

class App extends Component {
  state = {
    tab: 0,
    lecture_url: String,
    default_url: "https://vorlesungsplan.dhbw-mannheim.de/index.php?action=list&gid=3067001",
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
          </header>
        </div>
      </MuiThemeProvider>
    );
  }

  componentDidMount() {
    const existing = localStorage.getItem("lecture_url") === "true";
    console.log(existing);
    const lecture_url = existing ? localStorage.getItem("lecture_url") : this.state.default_url;
    this.setState({ lecture_url });
  }

  changingFunctions = {
    changeTab: (event, tab) => {
      this.setState({ tab });
    },
    handleStorage: () => {
      const { lecture_url } = this.state;
      localStorage.setItem('lecture_url', lecture_url);
    }
  };
}

export default App;
