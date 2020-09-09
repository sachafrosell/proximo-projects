import React, { useState, setState } from 'react';
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
import LandingPageHeaderMobile from './components/Headers/LandingPageHeader.js'
import WorkGallery from './WorkGallery.js'
import LazyLoad from 'react-lazy-load';
import SideBar from "./sidebar";
import './burgerstyle.css'



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
import ArcNavBar from "./components/Navbars/ArcNavbar.js"
import DarkFooter from "./components/Footers/DarkFooter.js";



const top = () => {
  window.scrollTo(0, 0);
}


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}


function LandingPage() {

  const forceUpdate = useForceUpdate();

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);


  const [loading, setLoading] = React.useState(false);

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

      {top}

      {dimensions.width > 1000 ?
      <ExamplesNavbar/>
      :
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />}

      <div className="wrapper">
        <LandingPageHeader/>

      </div>
      <LazyLoad >
      <About />
      </LazyLoad>

        <LazyLoad offsetTop={400}>

        <WorkGallery />
        </LazyLoad>


      <Competition />

      <InfoFooter />

    </>
  );
}

export default LandingPage;
