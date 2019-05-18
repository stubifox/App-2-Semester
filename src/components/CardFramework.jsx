import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    minWidth: "25vw",
    minHeight: "20vh",
    borderRadius: "5px",
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    margin: "10vw"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 50
  },
  pos: {
    marginBottom: 12
  }
};
function CardFramework(props) {
  const {
    classes,
    city,
    temperature,
    celsiusImg,
    weatherSrc,
    background
  } = props;

  return (
    <CardMedia image={background} className={classes.card}>
      <CardContent>
        <img width="100ch" alt="weather" src={weatherSrc} />
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom
          variant="h1"
        >
          {city}
        </Typography>
        <Typography variant="h1" className={classes.pos} color="textSecondary">
          {temperature}
          <img width="80ch" alt="celsius" src={celsiusImg} />
        </Typography>
      </CardContent>
    </CardMedia>
  );
}

CardFramework.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherSrc: PropTypes.number.isRequired
};

export default withStyles(styles)(CardFramework);
