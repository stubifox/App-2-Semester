import React, { Component } from "react";
import "../App.css";
import theme from "../utils/theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";

export default class Iframe extends Component {
  render() {
    const { default_url } = this.props;
    return (
      <div className="card">
        <MuiThemeProvider theme={theme}>
          <iframe
            title="unique2"
            style={{ width: "100%", height: "100%" }}
            src={default_url}
          />
        </MuiThemeProvider>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("message", this.handleFrameTasks);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.handleFrameTasks);
  }
  handleFrameTasks = event => {
    console.log("====================================");
    console.log(event);
    console.log("====================================");
  };
}
