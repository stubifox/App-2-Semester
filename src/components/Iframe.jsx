import React, { Component } from "react";
import "../App.css";
import theme from "../utils/theme.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles";

export default class Iframe extends Component {
  render() {
    const { src } = this.props;
    console.log("====================================");
    console.log(src);
    console.log("====================================");
    return (
      <div className="card">
        <MuiThemeProvider theme={theme}>
          <iframe
            title="unique2"
            style={{ width: "100%", height: "100%" }}
            src={src}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
