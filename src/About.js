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

import TukTukImg from './assets/img/floorplan2.png'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

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
  return (
    <>

      <div className="wrapper" style={{backgroundColor: "black", marginLeft: "0px"}}>

        <div className="section section-about-us" style={{paddingTop: "60px", paddingBottom: "130px", marginLeft: "0px"}}>
          <div style={{marginLeft: "50px", marginRight: "50px"}}>
            <Row>
              <Col className="text-left" md="6">
                <div style={{paddingTop: "35px"}}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      ABOUT

                    </span>
                  </h1>
                  <p style={{
                    border: "0.5px solid black",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                    maxWidth: "50px"
                  }}></p>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>


                    Louise Finlay started Proximo Projects to help her clients get excited for what’s coming next. There’s an energy that comes from that journey, which is captured in her designs, creating dynamic spaces that help her clients make the transition from one home to the next.



                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>



                    Louise understands that to know what’s coming next, you need to appreciate what has come before. That belief was instilled during her study of the history of art and architecture and is reflected in her designs and in her approach to preserving the authenticity of a space and use of vintage pieces, while creating something entirely new.



                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>




                    A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe. Her extensive travels have introduced her to a wealth of different people, places and influences which lend her designs a bold, cosmopolitan style. And they have taught her that the best journeys are all about the people you take them with, which is why she strongly believes in close collaboration with her clients at every step of the design process.


                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>





                    Louise studied interior design at Chelsea School of Art in London and at the University of Miami.

                  </h5>
                </div>

              </Col>
              <Col style={{position: "relative"}}>
                <img

                  src={TukTukImg}
                  style={{
                    position: "absolute",
                    verticalAlign: "middle",
                    top: "50%",
                    marginTop: "-200px"
                  }}
                >

                </img>
              </Col>



            </Row>
            <div className="separator separator-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
