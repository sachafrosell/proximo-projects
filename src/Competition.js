import React from 'react'
import {Link} from "react-router-dom"
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





const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

const ButtonStyle = {
  background: "none",
  color: "white",
  outlineColor: "white",
  border:"solid 0.7px white",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "10px",
  fontSize: "12px"
}

function Competition() {

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
      <div style={{paddingTop: "100px"}}>
        <h1 title="Social Media" style={{textAlign: "center", opacity: "90%", fontSize: "40px", fontWeight: "900px"}}>
          FOLLOW US ON INSTAGRAM
        </h1>
        <div style={{justifyContent: "center"}}>
          <p style={{
            border: "0.5px solid black",
            margin: "auto",
            marginTop: "0px",
            marginBottom: "50px",
            display: "block",
            maxWidth: "50px",

          }}></p>
        </div>
      </div>
      <div style={{paddingBottom: "100px"}}>
        {dimensions.width > 500 ?
          <>
          <div class="powr-instagram-feed" id="f7665533_1597589411"></div>
          <script src="https://www.powr.io/powr.js?platform=react"></script>
          </>


        :
        <>
        <div class="powr-instagram-feed" id="87c13a8d_1597590537"></div>
        <script src="https://www.powr.io/powr.js?platform=react"></script>
        </>
    }

      </div>

    </>
  );
}

export default Competition;
