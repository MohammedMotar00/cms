import React, { useState, useEffect } from "react";
import axios from "../axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";
const URL = "http://localhost:1337/cpu-specs/";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: 500,
  },
  width: {
    width: 100,
  },
});

function CpuSpecs({ id }) {
  const classes = useStyles();
  const [allmant, setAllmant] = useState([]);
  const [cpu, setCpu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios(`${URL}${id}`);

      setAllmant(request.data.cpu_specs_props_allmants);
      setCpu(request.data.cpu_specs_props_cpus);
    }

    fetchData();
  }, [id]);

  console.log(id);

  return (
    <TableContainer component={Paper} style={{ marginBottom: "50px" }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.width}>
          <TableRow>
            <StyledTableCell>Allmänt</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {allmant.map((data) => (
            <StyledTableRow key={data.type}>
              <StyledTableCell component="th" scope="row">
                {data.type}
              </StyledTableCell>

              <StyledTableCell align="left">{data.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <Divider />

        <TableHead className={classes.width}>
          <TableRow>
            <StyledTableCell>Processor</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cpu.map((data) => (
            <StyledTableRow key={data.type}>
              <StyledTableCell component="th" scope="row">
                {data.type}
              </StyledTableCell>

              <StyledTableCell align="left">{data.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CpuSpecs;
