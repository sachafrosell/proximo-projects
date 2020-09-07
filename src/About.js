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
import { Link} from "react-router-dom"

import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"

import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'

import Sketch from './assets/img/louise_homeimg.jpg'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

const ButtonStyle = {
  background: "none",
  color: "black",
  outlineColor: "black",
  border:"solid 0.7px black",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "8px",
  fontSize: "10px",
  opacity: "90%"

}

function About() {
  store.dispatch({
    type: "COLOR",
    payload: "BLACK"
  })
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

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

      <div className="wrapper" style={{backgroundColor: "black", marginLeft: "0px"}}>

        <div className="section section-about-us" style={{paddingTop: "60px", paddingBottom: "130px", marginLeft: "0px"}}>
          <div style={{marginLeft: "50px", marginRight: "50px"}}>
            <Row>
              <Col className="text-left" md="6">
                <div style={{paddingTop: "35px"}}>
                  <h2 title="About">
                    <span style={{fontStyle: "italic", paddingBottom: "10px"}}>
                      Taking your interiors to the next level

                    </span>

                  </h2>

                  <p style={{
                    border: "0.5px solid black",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                    maxWidth: "50px"
                  }}></p>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px", paddingTop: "10px"}}>


                    Whether you're looking to revamp your current home, transition to a new space, or you're simply after some styling advice, Proximo Projects is a boutique interior design firm in Miami beach that can help you discover your style and create beautiful spaces that feel like you.



                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>



                    We believe in the power of collaboration and will work closely with you to design your space. From mood boards, to hand drawn plans, to computer renders, we will give you all the visuals you need to imagine your new space. And we'll work with you on budgets, material selection and installation plans.



                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>




                    To get started and schedule a consultation, simply fill in our contact form and we'll be in touch.


                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>





                    We're excited to meet you!

                  </h5>
                  <Link
                  to="/contact">
                    <Button style={ButtonStyle}>
                      CONTACT US
                    </Button>
                  </Link>

                </div>

              </Col>
              {dimensions.width > 500 ?
                <Col style={{position: "relative"}}>
                  <img

                    src={Sketch}
                    style={{
                      paddingTop: "50px",
                      verticalAlign: "middle",


                    }}
                  >

                  </img>
                </Col> : ""
                }




            </Row>
            <div className="separator separator-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
