import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";

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
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={{
          pathname: `/component/${category}`,
          state: {
            slug: slug,
            category: category,
            id: id,
          },
        }}
      >
        <CardActionArea
          style={{
            height: "100%",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            alt={name}
            image={
              smallImg !== undefined
                ? `${URL}${smallImg}`
                : `${URL}${thumbnail}`
            }
            title={name}
            style={{ height: "250px", objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
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
      </Link>

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
                slug: slug,
                category: category,
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
