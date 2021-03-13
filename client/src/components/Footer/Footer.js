import React, { Component , useState, useEffect } from "react";
import { Container } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CourseDetail from "../CourseDetail/CourseDetail";
import styles from "./Footer.module.css";
import Button from "@material-ui/core/Button";
import CardContainer from "../LandingPage/Cards/CardContainer";
import ErrorBoundary from "../../hoc/ErrorBoundary";
import Logo from "../Logo/Logo";
import glass from "../../images/search-glass.png";
import { Navbar, Nav, NavLink, NavItem,Collapse,NavbarBrand,
  NavbarToggler} from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import newlogo from "../../images/newlogo.svg";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
  library.add(fab);
class Footer extends Component {

  render() {
    return (
      <MDBFooter className={styles.footer}>
    <MDBContainer fluid className="text-center text-md-left">
    <br/>
      <MDBRow>
        <MDBCol md="9"  >
          <Link to = "/">
          <img src={newlogo} alt="logo" className={styles.img}/>
          <h1 className={styles.h1}> SWC COURSES </h1>
          </Link>
          </MDBCol>
        <MDBCol md="3" className={styles.links}>
          <h5 className="title">Follow us on!</h5>&nbsp;
              <a href="https://www.facebook.com/swciitg/"> <FontAwesomeIcon icon={['fab', 'facebook-square']}  size="2x" /> </a>&nbsp;&nbsp;
              <a href="https://www.instagram.com/electionsiitg/"><FontAwesomeIcon icon={['fab', 'instagram']}  size="2x" /> </a>&nbsp;&nbsp;
              <a href="https://in.linkedin.com/in/swc-iitg-a233661a4"><FontAwesomeIcon icon={['fab', 'linkedin']}  size="2x" /></a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer fluid className="text-center text-md-left">
    <MDBRow>
    <MDBCol md="4">
    </MDBCol>
    <MDBCol md="4">
    <MDBContainer fluid>
     Developed By : 
    </MDBContainer>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://swc.iitg.ac.in/"> @students-web-commitee </a>
      </MDBContainer>
    </div>
  </MDBFooter>
    );
  }
}

export default Footer;
