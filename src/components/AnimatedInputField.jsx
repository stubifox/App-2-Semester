import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Spring, config } from "react-spring/renderprops";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

export default class AnimatedInput extends Component {
  render() {
    return (
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
              this.props.onChange(event.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {this.props.children}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => {
                      this.props.onSubmit();
                    }}
                  >
                    {this.props.SubmitText}
                    {this.props.children}
                  </Button>
                </InputAdornment>
              )
            }}
          />
        )}
      </Spring>
    );
  }
}
AnimatedInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  SubmitText: PropTypes.string.isRequired
};
