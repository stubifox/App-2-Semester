import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { LocationOnOutlined, InfoOutlined } from "@material-ui/icons";
import { Link } from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "90ch",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class DataTable extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>MARKET</CustomTableCell>
              <CustomTableCell align="center">OPENINGS</CustomTableCell>
              <CustomTableCell align="center">MORE</CustomTableCell>
              <CustomTableCell align="center">OFFERS</CustomTableCell>
              <CustomTableCell align="center">LOCATION</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell
                  component="th"
                  scope="row"
                  style={{ width: "25vw" }}
                >
                  <b>{row.market}</b>
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "30vw" }}>
                  {row.opening}
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "25vw" }}>
                  {row.information}
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "10vw" }}>
                  <Link href={row.offer} target="_blank" color="primary">
                    <InfoOutlined />
                  </Link>
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "10vw" }}>
                  <Link href={row.location} target="_blank" color="secondary">
                    <LocationOnOutlined />
                  </Link>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);
