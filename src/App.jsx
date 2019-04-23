import React, { Component } from "react";
import "./App.css";
import theme from "./theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Appbar from './components/AppBar.jsx'
import RenderComponent from './components/RenderBased.jsx'

class App extends Component {
  state = {
    tab: 0
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Appbar changeTab={this.changeTab} {...this.state}/>
        <div className="App">
          <header className="App-header">
            <RenderComponent {...this.state} />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
  changeTab = (event, tab) => {
    this.setState({ tab }, () =>
      console.log("currentTab: " + tab)
    );
  };
}

export default App;
