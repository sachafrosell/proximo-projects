import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/img/proximo-logo.PNG";
import LogoDark from "../../assets/img/proximo-logo.PNG";
import SideBar from "../../sidebar";
import '../../burgerstyle.css';
import { slide as Menu } from "react-burger-menu";

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
    {dimensions.width < 1000 ?
      <>
    <Navbar className={"fixed-top " + navbarColor} color="info"  style={{height: 80}}>
      <Menu {...props}>
        <Link to='/home'>
          <a className="menu-item" href="/" style={{color: "black", opacity: '60%'}}>
            Home
          </a>
        </Link>

        <Link to='/about'>
          <a className="menu-item" href="/about" style={{color: "black", opacity: '60%'}}>
            About
          </a>
        </Link>

        <Link to='/contact'>
          <a className="menu-item" href="/contact" style={{color: "black", opacity: '60%'}}>
            Contact
          </a>
        </Link>

      </Menu>

     <div className="navbar-translate" style={{position: "absolute", top: "8px"}}>

       <NavbarBrand style={{padding: "0px"}}>
         <Link to="/">
           <img
             src={LogoLight}
             style={{
                 width: "60px",
                 position: "absolute",
                 zIndex: "100"
             }}
           >
           </img>
         </Link>
       </NavbarBrand>



     </div>

   </Navbar>



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


       </Navbar>}

    </>
  );
}

export default ExamplesNavbar;
