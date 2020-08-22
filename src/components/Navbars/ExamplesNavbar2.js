import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/img/proximo-logo.PNG";
import LogoDark from "../../assets/img/proximo-logo.PNG";

// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

var Logo = LogoDark
var ButtonColor = "black"
var navbarColor = "navbar-white"

const offset = 383



function ExamplesNavbar(props) {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
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




  return (
    <>

    <Navbar className={"fixed-top " + navbarColor} color="info"  style={{height: 120}}>


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
        <NavbarBrand>
          <div style={{textAlign: "left", fontSize: "30px", letterSpacing: "5px", fontWeight: "900", color: "black", opacity: "75%"}}>
            PROXIMO PROJECTS
          </div>
        </NavbarBrand>
        <Nav style={{float: "right", marginRight: -dimensions.width +200 + offset}}>

          <NavItem>
            <Link to="/">
              <Button style={{
                  background: "none",
                  color: "black",
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
                  color: "black",
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
                  color: "black",
                  position: "relative",
                  float: "right",
                  fontSize: "15px",
                  borderRadius: "0px",
                  padding: "15px",
                  marginTop: "20px"
              }} > CONTACT </Button>
            </Link>
          </NavItem>
        </Nav>


      </div>


    </Navbar>
    </>
  );
}

export default ExamplesNavbar;
