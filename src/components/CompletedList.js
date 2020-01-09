import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(date, title, value, status) {
  return { date, title, value, status };
}

const rows = [
  createData("16 Dec, 2019", "Project 1", "Accountability", "Done"),
  createData("17 Dec, 2019", "Project 2", "Honesty", "Done"),
  createData("16 Dec, 2019", "Project 3", "Courage", "Done")
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Projects Recently Completed</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Value</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div classtitle={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more projects
        </Link>
      </div>
    </React.Fragment>
  );
}
