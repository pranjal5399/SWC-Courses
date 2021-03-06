import React, { useContext } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../../images/logo.png";
import urls from "../../../constants";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
}));

export default function Sidemenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const logoutHandler = () => {
    window.open(urls.LOGOUT, "_self");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "26rem",
              maxWidth: "100%",
              boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.2)",
              borderRadius: "30px",
              transform: "scale(0.9)",
            }}
          />
        </ListItem>
        <ListItem button style={{ paddingLeft: "30px", margin: "4px 0" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#252f5a",
            }}
          >
            <ListItemText primary="HOME" />
          </Link>
        </ListItem>
        <ListItem button style={{ paddingLeft: "30px", margin: "4px 0" }}>
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "#252f5a",
            }}
          >
            <ListItemText primary="MY COURSES" />
          </Link>
        </ListItem>
        <ListItem button style={{ paddingLeft: "30px", margin: "4px 0" }}>
          <Link
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#252f5a",
            }}
          >
            <ListItemText primary="ALL COURSES" />
          </Link>
        </ListItem>
        <ListItem button style={{ paddingLeft: "30px", margin: "4px 0" }}>
          <Link
            to="/logout"
            style={{
              textDecoration: "none",
              color: "#252f5a",
            }}
          >
            <ListItemText primary="LOGOUT" onClick={logoutHandler} />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer("left", true)}>Left</Button> */}
      <IconButton
        edge="start"
        className={clsx(classes.menuButton)}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
