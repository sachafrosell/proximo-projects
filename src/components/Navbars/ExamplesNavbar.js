import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/img/proximo-logo.PNG";
import LogoDark from "../../assets/img/proximo-logo.PNG";
import store from '../../Store.js';
import SideBar from "../../sidebar";
import '../../burgerstyle.css';

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
    {dimensions.width < 1000 ? <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> : ""}

    </>
  );
}

export default ExamplesNavbar;
