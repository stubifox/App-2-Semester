import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavBar from "./Navbar.jsx";
import Rocket from "../ressources/Rocket.png";
import TextField from "@material-ui/core/TextField";
import { Spring, config } from "react-spring/renderprops";
import { SearchOutlined } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  }
};

class SimpleAppBar extends Component {
  render() {
    const { tab, handleInputChange, changeWeatherCity } = this.props;

    return (
      <div style={{ position: "fixed", width: "100%" }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography vawidth="20ch" riant="h6" color="inherit">
              <img src={Rocket} alt="" width="40ch" />
            </Typography>
            <NavBar {...this.props} />
          </Toolbar>
          {tab === 1 && (
            <Spring
              from={{ opacity: 0, width: "0%" }}
              to={{ opacity: 1, width: "100%" }}
              config={config.molasses}
              delay={100}
            >
              {props => (
                <TextField
                  style={props}
                  id="outlined-search"
                  label="Search City"
                  type="search"
                  margin="normal"
                  variant="outlined"
                  onChange={event => {
                    handleInputChange(event.target.value);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlined />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          onClick={() => {
                            changeWeatherCity();
                          }}
                        >
                          Update
                          <SearchOutlined />
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            </Spring>
          )}
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
