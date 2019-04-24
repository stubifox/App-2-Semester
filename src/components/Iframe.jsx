import React, { Component } from "react";
import "../App.css";
import theme from "../theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";

export default class AnimatedFrame extends Component {
  render() {
    const { lecture_url } = this.props;
    return (
      <div className="card">
        <MuiThemeProvider theme={theme}>
          <iframe
            title="unique2"
            style={{ width: "100%", height: "100%" }}
            src={lecture_url}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
