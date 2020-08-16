import React from 'react'

import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";

import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"
import ContentNewCard from "./ContentNewCard.js"
import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'

import Kigali from './assets/img/road1.jpg'



const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

function ContactHeader() {

  let pageHeader = React.createRef();
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {

    if (window.innerWidth > 500) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0,"+ windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("./assets/img/road1.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>

          <div style={{textAlign: "left", paddingTop: "80px", paddingLeft: "20px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                GET IN TOUCH


              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
          <h5 className="description" style={{fontSize: "17px", fontWeight: "500px", color: "#FFF", fontWeight: "500px"}}>

              We are always looking for exciting new projects to help work on. Please contact us for a quote: We are always happy to discuss your project and its requirements.
            </h5>

            <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px"}}>

              We look forward to hearing from you.
            </h5>
              </div>


          <div className="separator separator-primary"></div>
        </Container>
      </div>

    </>
  );
}

export default ContactHeader;
