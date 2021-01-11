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

function RenderSpecs({ URL, id, title1, title2, category }) {
  const classes = useStyles();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios(`${URL}${id}`);

      if (category === "Grafikkort") {
        setData1(request.data.gpu_specs_props_allmants);
        setData2(request.data.gpu_specs_props_minnes);
      }

      if (category === "Processor") {
        setData1(request.data.cpu_specs_props_allmants);
        setData2(request.data.cpu_specs_props_cpus);
      }

      if (category === "Nätaggregat") {
        setData1(request.data.psu_specs_props_allmants);
        setData2(request.data.psu_specs_props_natdels);
      }

      if (category === "RAM-minne") {
        setData1(request.data.ram_specs_props_allmants);
        setData2(request.data.ram_specs_props_minnes);
      }

      if (category === "Hårddisk") {
        setData1(request.data.harddrive_specs_props_allmants);
        setData2(request.data.harddrive_specs_props_prestandas);
      }

      if (category === "Datorchassi") {
        setData1(request.data.chassi_specs_props_allmants);
        setData2(request.data.chassi_specs_props_anslutnings);
      }

      if (category === "Kylning") {
        setData1(request.data.cpu_cooling_specs_props_allmants);
        setData2(request.data.cpu_cooling_specs_props_heats);
      }

      if (category === "Moderskort") {
        setData1(request.data.motherboard_specs_props_allmants);
        setData2(request.data.motherboard_specs_props_rams);
      }
    }

    fetchData();
  }, [category]);

  return (
    <TableContainer component={Paper} style={{ margin: "50px 0" }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.width}>
          <TableRow>
            <StyledTableCell style={{ fontSize: "16px", fontWeight: "bold" }}>
              {title1}
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data1.map((data) => (
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
            <StyledTableCell style={{ fontSize: "16px", fontWeight: "bold" }}>
              {title2}
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data2.map((data) => (
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

export default RenderSpecs;
