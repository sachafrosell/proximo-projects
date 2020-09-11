import React from 'react'
import FadeIn from 'react-fade-in'

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

import TukTukImg from './assets/img/800px_COLOURBOX25316311.jpg'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'
import City4 from './assets/img/city4.jpg'
import Challenge from './Challenge.js'




const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px",
   color: "black"
}

const divStyle1 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  minHeight: "375px",
  height: "100%"
}

const divStyle2 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  minHeight: "300px",
    height: "100%"
}

const colStyle = {
  paddingTop: "5px",

}

function Pillars() {



    return (
      <>

      <FadeIn delay='3200' transitionDuration='1000'>
        <Challenge />
      </FadeIn>
      </>
    )


}

export default Pillars;
