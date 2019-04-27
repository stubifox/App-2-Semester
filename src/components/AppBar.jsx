import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavBar from "./Navbar.jsx";
import Rocket from "../ressources/Rocket.png";

const styles = {
  root: {
    flexGrow: 1
  }
};

class SimpleAppBar extends Component {
  render() {
    return (
      <div style={{ position: "fixed", width: "100%" }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography vawidth='20ch'riant="h6" color="inherit">
              <img src={Rocket} alt="" width='40ch'/>
            </Typography>
            <NavBar {...this.props} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
