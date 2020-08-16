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
import ContentNewCard from "./ContentNewCard.js"
import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'

import Kigali from './assets/img/kigali-city-4.jpg'



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


  return (
    <>
      <div style={{paddingBottom: "50px"}}>

        <div class="powr-instagram-feed" id="f7665533_1597589411"></div>
        <script src="https://www.powr.io/powr.js?platform=react"></script>
      </div>

    </>
  );
}

export default Competition;
