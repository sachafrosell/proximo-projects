import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/img/proximo-logo.PNG";
import LogoDark from "../../assets/img/proximo-logo.PNG";
import store from '../../Store.js';
import SideBar from "../../sidebar";
import '../../burgerstyle.css';
import { slide as Menu } from "react-burger-menu";

// reactstrap components
import {
  Collapse,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,

} from "reactstrap";

var navbarColor = "navbar-transparent"

const ButtonStyle = {
  background: "none",
  position: "relative",
  float: "right",
  borderRadius: "0px",
  padding: "20px"
}

const offset = 383


function ExamplesNavbar(props) {



  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  const [colors, setColors] = React.useState({
    bCol: "white",
    logo: LogoLight
  })



    React.useEffect(() => {
      function handleColors() {

      if(window.pageYOffset < 50) {
          setColors({
            bCol: "white",
            logo: LogoLight
          })
        } else if (window.pageYOffset > 49) {

          setColors({
            bCol: "black",
            logo: LogoDark
          })
        }

        };
        window.addEventListener("scroll", handleColors);
        return function cleanup() {
          window.removeEventListener("scroll", handleColors);

      }
    })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  })



  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        (document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49)
      ) {
        setNavbarColor("navbar-white");

      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor("navbar-transparent");

      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
    {dimensions.width < 1000 ?
      <>




      <Menu {...props}>
        <Link to='/home'>
          <a className="menu-item" href="/">
            Home
          </a>
        </Link>

        <Link to='/about'>
          <a className="menu-item" href="/about">
            About
          </a>
        </Link>

        <Link to='/contact'>
          <a className="menu-item" href="/services">
            Contact
          </a>
        </Link>

      </Menu>
    
      </>
       : <Navbar className={"fixed-top " + navbarColor} color="info"  style={{height: 120}}>


      <div className="navbar-translate" style={{position: "absolute", top: "8px"}}>

        <NavbarBrand style={{padding: "0px", paddingLeft: "20px"}}>
          <Link to="/">
            <img
              src={LogoLight}
              style={{
                  width: "110px",
                  position: "10px"
              }}
            >
            </img>
          </Link>
        </NavbarBrand>
        {colors.bCol == "black" && dimensions.width > 1000 ? <NavbarBrand>
          <div style={{textAlign: "left", fontSize: "30px", letterSpacing: "5px", fontWeight: "900", color: "black", opacity: "75%"}}>
            PROXIMO PROJECTS
          </div>
        </NavbarBrand> : ""}

        {colors.bCol == "white" && dimensions.width > 450 ? <Nav style={{float: "right", marginRight: -dimensions.width +200}}>

          <NavItem>
            <Link to="/">
              <Button style={{
                  background: "none",
                  color: colors.bCol,
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > HOME </Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">
              <Button style={{
                  background: "none",
                  color: colors.bCol,
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > ABOUT </Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">
              <Button style={{
                  background: "none",
                  color: colors.bCol,
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > CONTACT </Button>
            </Link>
          </NavItem>
        </Nav> : dimensions.width > 450 && colors.bCol != "white" ? <Nav style={{float: "right", marginRight: -dimensions.width +200 + offset}}>

          <NavItem>
            <Link to="/">
              <Button style={{
                  background: "none",
                  color: colors.bCol,
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > HOME </Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">
              <Button style={{
                  background: "none",
                  color: colors.bCol,
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > ABOUT </Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">
              <Button style={{
                  background: "none",
                  color: colors.bCol,
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > CONTACT </Button>
            </Link>
          </NavItem>
        </Nav> : ""}


      </div>


    </Navbar>}

    </>
  );
}

export default ExamplesNavbar;
