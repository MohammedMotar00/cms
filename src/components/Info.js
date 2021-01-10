import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Description from "./Description";
import Specs from "./Specs";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    flexWrap: "wrap",
  },
}));

function Info({
  name,
  desc1,
  desc2,
  desc3,
  description,
  description1,
  description2,
  description3,
  category,
  slug,
  id,
  data,
}) {
  const classes = useStyles();
  const [infoType, setInfoType] = useState("description");
  const [open, setOpen] = useState(false);
  console.log(slug);

  const handleChange = (event) => {
    setInfoType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container
      style={{
        // border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // border: "1px solid",
        }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Välj information
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={infoType}
            onChange={handleChange}
          >
            <MenuItem value="description">Produktbeskrivning</MenuItem>
            <MenuItem value="specs">Teknisk specifikation</MenuItem>
          </Select>
        </FormControl>

        {infoType === "description" ? (
          <Description
            desc1={desc1}
            desc2={desc2}
            desc3={desc3}
            description={description}
            description1={description1}
            description2={description2}
            description3={description3}
          />
        ) : (
          <Specs category={category} data={data} />
        )}
      </Grid>
    </Container>
  );
}

export default Info;
