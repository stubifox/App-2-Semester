import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.common.black
  }
});
const footers = [
  {
    title: "App 2 Semester",
    description: [
      "Aaron Kollmann",
      "Marco Kirsch",
      "Tim Heinze",
      "Marcel Hans",
      "Max Stubenbord"
    ]
  },
  {
    title: "Developer, UI- Chief Executive",
    description: ["Max", "Rest lol"]
  },
  {
    title: "Scrum-Master",
    description: ["Aaron"]
  }
];
const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classNames(classes.footer)}>
      <Grid container spacing={12} justify="space-evenly">
        {footers.map(footer => (
          <Grid item xs key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            {footer.description.map(item => (
              <Typography key={item} variant="subtitle1" color="textSecondary">
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </footer>
  );
};

export default withStyles(styles)(Footer);
