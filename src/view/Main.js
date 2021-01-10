import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Fetch from "../components/Fetch";

import gpu_icon from "../icons/graphics-card.png";
import ram_icon from "../icons/ram.png";
import cpu_icon from "../icons/cpu.png";
import motherboard_icon from "../icons/motherboard.png";
import harddrive_icon from "../icons/harddrive.png";
import case_icon from "../icons/case.png";
import psu_icon from "../icons/psu.png";
import cooling_icon from "../icons/cooling-fan.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(null);

  if (fetchUrl) localStorage.setItem("url", fetchUrl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem button>
        <ListItemText
          primary="Datorkomponenter"
          onClick={() => setFetchUrl("components")}
        />
      </ListItem>
      <Divider />
      <List>
        {[
          { component: "Grafikkort", icon: gpu_icon, fetchUrl: "gpus" },
          { component: "RAM-minne", icon: ram_icon, fetchUrl: "rams" },
          { component: "Processor", icon: cpu_icon, fetchUrl: "cpus" },
          {
            component: "Moderskort",
            icon: motherboard_icon,
            fetchUrl: "motherboards",
          },
          {
            component: "Hårddisk",
            icon: harddrive_icon,
            fetchUrl: "harddrives",
          },
          { component: "Datorchassi", icon: case_icon, fetchUrl: "chassis" },
          { component: "Nätaggregat", icon: psu_icon, fetchUrl: "psus" },
          {
            component: "Kylning",
            icon: cooling_icon,
            fetchUrl: "cpu-coolings",
          },
        ].map((pc) => (
          <ListItem
            button
            key={pc.component}
            onClick={() => setFetchUrl(pc.fetchUrl)}
          >
            <ListItemText primary={pc.component} />
            <img src={pc.icon} alt={pc.component} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="button" noWrap>
            Datorkomponenter
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Fetch fetchUrl={fetchUrl} />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
