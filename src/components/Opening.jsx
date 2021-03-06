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
          <TableHead style={{ position: "" }}>
            <TableRow>
              <CustomTableCell>MARKET</CustomTableCell>
              <CustomTableCell>INFO</CustomTableCell>
              <CustomTableCell align="center">OPENINGS</CustomTableCell>
              <CustomTableCell align="center">MORE</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(data => (
              <TableRow className={classes.row} key={data.id}>
                <CustomTableCell
                  component="th"
                  scope="row"
                  style={{ width: "25vw" }}
                >
                  <b>{data.market}</b>
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "5vw" }}>
                  <Link href={data.location} target="_blank" color="secondary">
                    <LocationOnOutlined />
                  </Link>
                  <Link href={data.offer} target="_blank" color="primary">
                    <InfoOutlined />
                  </Link>
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "30vw" }}>
                  {data.opening}
                </CustomTableCell>
                <CustomTableCell align="center" style={{ width: "25vw" }}>
                  {data.information}
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  componentWillMount() {
    this.props.displayLoadingBar(500);
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);
