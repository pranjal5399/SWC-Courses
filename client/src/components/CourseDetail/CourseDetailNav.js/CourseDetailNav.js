import React, { useState, useEffect, useContext } from "react";
import styles from "./CourseDetailNav.module.css";
import newlogo from "../../../images/newlogo.svg";
import { AuthContext } from "../../../contexts/AuthContext";
import classNames from "classnames";
import { Link } from "react-router-dom";
import glass from "../../../images/search-glass.png";
import {
  Navbar,
  Nav,
  NavLink,
  NavItem,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
} from "reactstrap";
import Card from "../../LandingPage/Cards/Card";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import urls from "../../../constants";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    height: "90%",
    border: "#edf8ff 7px solid",
    borderRadius: 30,
    backgroundColor: "#ffffff",
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/checkered-light-emboss.png')",
    // backdropFilter: "grayscale(0.5) opacity(1)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "5%",
    left: "10%",
    overflowY: "auto",
    ["@media (max-width: 550px)"]: {
      width: "90%",
      left: "5%",
    },
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const CourseDetailNav = (props) => {
  const { courses } = props;
  const classes = useStyles();
  const { isLoggedIn } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    console.log("URLS HAI", urls);
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      }
      if (window.pageYOffset < 50) {
        setIsScrolled(false);
      }
    };
  }, [isScrolled, setIsScrolled]);

  const toggleNavBar = () => setIsNavOpen(!isNavOpen);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  const logoutHandler = () => {
    window.open(urls.LOGOUT, "_self");
  };

  const loginHandler = () => {
    window.open(urls.LOGIN, "_self");
  };

  const searchList = courses.filter((course) => {
    return course.title.toLowerCase().includes(search.toLowerCase());
  });

  // BODY FOR SEARCH MODAL
  const body = (
    <div className={classes.paper}>
      <h2
        id="simple-modal-title"
        style={{
          textAlign: "center",
          margin: "10px 0 15px",
          color: "#1B3D2F",
          fontFamily: "myUbuntu",
          fontSize: "3rem",
        }}
      >
        Search Results
      </h2>
      {searchList.length ? (
        <div className={styles.cardContainer}>
          {searchList.map((course, i) => {
            return (
              <Card
                key={i}
                name={`simple-controlled-${i}`}
                imgScr={course.imgPath}
                title={course.title}
                description={course.description}
                id={course._id}
                videos={course.videos}
                author={course.author}
              />
            );
          })}
        </div>
      ) : (
        <h6
          style={{
            textAlign: "center",
            fontFamily: "myUbuntu",
            fontSize: "1.3rem",
          }}
        >
          No courses found !!
        </h6>
      )}
    </div>
  );

  return (
    <Navbar
      id="navbar"
      className={isScrolled ? styles.scroll : styles.NavBar}
      light
      expand="md"
    >
      <NavbarBrand>
        <Link to="/">
          <img src={newlogo} alt="logo" />
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavBar} />
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className={styles.Nav}>
          <NavItem className={styles.NavItem}>
            <form className={styles.SearchForm} onSubmit={handleOpen}>
              <div className="input-group">
                <img src={glass} alt="glass" />
                <input
                  type="text"
                  className="form-control"
                  name="dsearch"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="find courses"
                />
              </div>
            </form>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </NavItem>
          <NavItem className={styles.NavItem}>
            <Link to="/courses">
              <NavLink
                className={isScrolled ? styles.NavLinkScroll : styles.NavLink}
              >
                COURSES
              </NavLink>
            </Link>
          </NavItem>
          {isLoggedIn ? (
            <NavItem className={styles.NavItem}>
              {/* <Link to="/logout"> */}
              <NavLink
                className={isScrolled ? styles.NavLinkScroll : styles.NavLink}
                onClick={logoutHandler}
              >
                LOGOUT
              </NavLink>
              {/* </Link> */}
            </NavItem>
          ) : (
            <NavItem className={styles.NavItem}>
              {/* <Link to="/login"> */}
              <NavLink
                className={isScrolled ? styles.NavLinkScroll : styles.NavLink}
                onClick={loginHandler}
              >
                LOGIN
              </NavLink>
              {/* </Link> */}
            </NavItem>
          )}

          {isLoggedIn ? (
            <>
              <NavItem className={styles.NavItem}>
                <Link to="/profile">
                  <NavLink
                    className={
                      isScrolled ? styles.NavLinkScroll : styles.NavLink
                    }
                  >
                    MY COURSES
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem
                className={classNames("d-none", "d-sm-block", styles.NavItem)}
              >
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <NavLink>
                    <Avatar alt={props.name} src="#" />
                  </NavLink>
                </Link>
              </NavItem>
            </>
          ) : (
            <NavbarText
              className={styles.NavItem}
              style={{ color: isScrolled ? "#fff" : "#999" }}
            >
              Welcome Visitor !!
            </NavbarText>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CourseDetailNav;
