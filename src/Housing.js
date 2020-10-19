import React from "react";
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"

import store from './Store.js'
import About from './About.js'
import Competition from './Competition.js'
import Challenge from './Challenge.js'
import Solution from './Solution.js'
import Overview from './Overview.js'
import Team from './Team.js'
import InfoFooter from "./components/Footers/InfoFooter.js"

import HousingInfo from './HousingInfo.js'
import HousingInfo2 from './HousingInfo2.js'


// reactstrap ./components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core ./components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";

const titleStyle = {
   fontWeight: "900px",
   fontSize: "20px",
   textDecoration: "underline"
}

function PillarPage() {


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
        <ExamplesNavbar />
        <div className="wrapper">

        </div>
        <HousingInfo />

        <p style={{height: "100px", backgroundColor: "rgba(0, 0, 0, 0.3)", marginBottom: "0px"}}></p>

        <InfoFooter />
        <DarkFooter />

      </>
    );


}

export default PillarPage;
