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

import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'

import Louise from './assets/img/louise2.jpeg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px",
   color: "black"

}

const divStyle = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black"
}
const divStyle3 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",

}
const divStyle2 = {
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "15px",

  minHeight: "270px"
}

function Challenge() {
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

      <div className="wrapper" style={{background: "white", postion: 'relative'}}>
        {console.log(dimensions.width)}
        {dimensions.width > 1430 ? <Row>
          <Col xs={7} style={{paddingLeft: "100px", paddingTop: "50px"}}>
            <h5 title="Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next">
              Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next. There’s an energy that comes from that journey, which is captured in her designs, creating dynamic spaces that help her clients make the transition from one home to the next.
            </h5>
            <h5 title="Louise understands that to know what’s coming next, you need to appreciate what has come before">
              Louise understands that to know what’s coming next, you need to appreciate what has come before. That belief was instilled during her study of the history of art and architecture and is reflected in her designs and in her approach to preserving the authenticity of a space and use of vintage pieces, while creating something entirely new.
            </h5>
            <h5 title="A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe.">
              A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe. Her extensive travels have introduced her to a wealth of different people, places and influences which lend her designs a bold, cosmopolitan style. And they have taught her that the best journeys are all about the people you take them with, which is why she strongly believes in close collaboration with her clients at every step of the design process.
            </h5>
            <h5 title="Louise studied interior design at Chelsea School of Art in London and at the University of Miami.">
              Louise studied interior design at Chelsea School of Art in London and at the University of Miami.
            </h5>
          </Col>
          <Col xs={5}>
            <img src={Louise}
              style={{maxHeight: "100%", paddingLeft: "50px", margin: "auto"}}/>


          </Col>

        </Row> : dimensions.width > 1364 ? <Row>
          <Col xs={6} style={{paddingLeft: "100px", paddingTop: "50px"}}>
            <h5 title="Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next">
              Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next. There’s an energy that comes from that journey, which is captured in her designs, creating dynamic spaces that help her clients make the transition from one home to the next.
            </h5>
            <h5 title="Louise understands that to know what’s coming next, you need to appreciate what has come before">
              Louise understands that to know what’s coming next, you need to appreciate what has come before. That belief was instilled during her study of the history of art and architecture and is reflected in her designs and in her approach to preserving the authenticity of a space and use of vintage pieces, while creating something entirely new.
            </h5>
            <h5 title="A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe.">
              A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe. Her extensive travels have introduced her to a wealth of different people, places and influences which lend her designs a bold, cosmopolitan style. And they have taught her that the best journeys are all about the people you take them with, which is why she strongly believes in close collaboration with her clients at every step of the design process.
            </h5>
            <h5 title="Louise studied interior design at Chelsea School of Art in London and at the University of Miami.">
              Louise studied interior design at Chelsea School of Art in London and at the University of Miami.
            </h5>
          </Col>
          <Col xs={6}>
            <img src={Louise}
              style={{maxHeight: "100%", paddingLeft: "50px", margin: "auto"}}/>


          </Col>

        </Row> : dimensions.width > 1335 ? <Row>
          <Col xs={5} style={{paddingLeft: "100px", paddingTop: "50px"}}>
            <h5 title="Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next">
              Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next. There’s an energy that comes from that journey, which is captured in her designs, creating dynamic spaces that help her clients make the transition from one home to the next.
            </h5>
            <h5 title="Louise understands that to know what’s coming next, you need to appreciate what has come before">
              Louise understands that to know what’s coming next, you need to appreciate what has come before. That belief was instilled during her study of the history of art and architecture and is reflected in her designs and in her approach to preserving the authenticity of a space and use of vintage pieces, while creating something entirely new.
            </h5>
            <h5 title="A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe.">
              A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe. Her extensive travels have introduced her to a wealth of different people, places and influences which lend her designs a bold, cosmopolitan style. And they have taught her that the best journeys are all about the people you take them with, which is why she strongly believes in close collaboration with her clients at every step of the design process.
            </h5>
            <h5 title="Louise studied interior design at Chelsea School of Art in London and at the University of Miami.">
              Louise studied interior design at Chelsea School of Art in London and at the University of Miami.
            </h5>
          </Col>
          <Col xs={7}>
            <img src={Louise}
              style={{maxHeight: "100%", paddingLeft: "50px", margin: "auto"}}/>


          </Col>

        </Row> : dimensions.width > 1250 ? <Row>
          <Col xs={8} style={{paddingLeft: "100px", paddingTop: "50px"}}>
            <h5 title="Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next">
              Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next. There’s an energy that comes from that journey, which is captured in her designs, creating dynamic spaces that help her clients make the transition from one home to the next.
            </h5>
            <h5 title="Louise understands that to know what’s coming next, you need to appreciate what has come before">
              Louise understands that to know what’s coming next, you need to appreciate what has come before. That belief was instilled during her study of the history of art and architecture and is reflected in her designs and in her approach to preserving the authenticity of a space and use of vintage pieces, while creating something entirely new.
            </h5>
            <h5 title="A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe.">
              A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe. Her extensive travels have introduced her to a wealth of different people, places and influences which lend her designs a bold, cosmopolitan style. And they have taught her that the best journeys are all about the people you take them with, which is why she strongly believes in close collaboration with her clients at every step of the design process.
            </h5>
            <h5 title="Louise studied interior design at Chelsea School of Art in London and at the University of Miami.">
              Louise studied interior design at Chelsea School of Art in London and at the University of Miami.
            </h5>
          </Col>
          <Col xs={4}>
            <img src={Louise}
              style={{maxHeight: "100%", paddingLeft: "50px", paddingTop: "100px", paddingRight: "50px",margin: "auto"}}/>


          </Col>

        </Row> : <Row>
          <Col xs={12} style={{paddingLeft: "100px", paddingTop: "50px", paddingRight: "100px"}}>
            <h5 title="Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next">
              Louise Finlay started The Proximo Project to help her clients get excited for what’s coming next. There’s an energy that comes from that journey, which is captured in her designs, creating dynamic spaces that help her clients make the transition from one home to the next.
            </h5>
            <h5 title="Louise understands that to know what’s coming next, you need to appreciate what has come before">
              Louise understands that to know what’s coming next, you need to appreciate what has come before. That belief was instilled during her study of the history of art and architecture and is reflected in her designs and in her approach to preserving the authenticity of a space and use of vintage pieces, while creating something entirely new.
            </h5>
            <h5 title="A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe.">
              A global citizen, Louise moved to Miami from London 10 years ago and has also spent time in New York, Australia, Africa, and in mainland Europe. Her extensive travels have introduced her to a wealth of different people, places and influences which lend her designs a bold, cosmopolitan style. And they have taught her that the best journeys are all about the people you take them with, which is why she strongly believes in close collaboration with her clients at every step of the design process.
            </h5>
            <h5 title="Louise studied interior design at Chelsea School of Art in London and at the University of Miami.">
              Louise studied interior design at Chelsea School of Art in London and at the University of Miami.
            </h5>
          </Col>
          <Col xs={3}>
          </Col>

          <Col>
            <img src={Louise}
              style={{maxWidth: "100%", paddingTop: "20px", paddingBottom: "50px"}}/>


          </Col>
          <Col xs={3}>
          </Col>

        </Row>}


      </div>
    </>
  );
}

export default Challenge;
