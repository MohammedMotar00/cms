import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import styling from "./styling";

const URL = "http://localhost:1337";

function PcComponent({
  name,
  category,
  slug,
  image,
  description,
  description1,
  description2,
  description3,
  desc1,
  desc2,
  desc3,
  id,
}) {
  const classes = styling();
  const smallImg = image[0]?.formats?.small?.url;
  const thumbnail = image[0]?.formats?.thumbnail?.url;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={
            smallImg !== undefined ? `${URL}${smallImg}` : `${URL}${thumbnail}`
          }
          title={name}
          style={{ objectFit: "fit" }}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h3">
            {name}
          </Typography>

          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <List style={{ display: "flex", justifyContent: "flex-start" }}>
            <ListItem
              style={{
                flexDirection: "column",
                justifyContent: "start",
                border: "1px solid blue",
              }}
            >
              <ListItemText primary="Single-line item" />
              <ListItemText primary="Single-line item" />
              <ListItemText primary="Single-line item" />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          // background: "red",
          border: "1px solid red",
        }}
      >
        <Button size="large" color="primary" style={{ flex: 1 }}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default PcComponent;
