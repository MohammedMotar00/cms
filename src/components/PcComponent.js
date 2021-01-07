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

import { Link } from "react-router-dom";

import styling from "./styling";
import ComponentPage from "../view/ComponentPage";

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
  prop1,
  prop2,
  prop3,
  id,
}) {
  const classes = styling();
  const smallImg = image[0]?.formats?.small?.url;
  const thumbnail = image[0]?.formats?.thumbnail?.url;

  return (
    <Card className={classes.card}>
      <CardActionArea
        style={{
          height: "100%",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          // height="30%"
          image={
            smallImg !== undefined ? `${URL}${smallImg}` : `${URL}${thumbnail}`
          }
          title={name}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="h2"
            style={{ textAlign: "center" }}
          >
            {name}
          </Typography>

          <List
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "5px",
            }}
          >
            <ListItem
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                border: "1px solid blue",
                flex: 1,
              }}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.font}>{prop1}</Typography>
                }
              />
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.font}>{prop2}</Typography>
                }
              />
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.font}>{prop3}</Typography>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          border: "1px solid red",
        }}
      >
        <Button size="large" color="primary" style={{ flex: 1 }}>
          {/* <Link to="/component" params={{  }}>Läs mer...</Link> */}
          <Link
            to={{
              pathname: "/component",
              state: {
                name: name,
                id: id,
              },
            }}
          >
            Läs mer...
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PcComponent;
