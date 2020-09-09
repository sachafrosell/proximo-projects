import React from "react";
import {Link} from "react-router-dom";
import FadeIn from 'react-fade-in';


// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components



const ButtonStyle = {
  background: "none",
  outlineColor: "#FFFFFF",
  border:"solid 0.7px white",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "-15px",
  fontSize: "13px"
}

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }

      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

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
      <div className="page-header page-header-large">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/proximo-homepage.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-left">
          {dimensions.width > 700 ? <Container style={{paddingTop: "300px", paddingRight: "0px", paddingLeft: "0px", marginRight: "50px"}}>
            <span> <h1 className="title" style={{textAlign: "right", fontSize: "60px", letterSpacing: "5px", fontWeight: "300"}}>
              <FadeIn delay='500' transitionDuration='1000'>
                <span>
            <span style={{fontWeight: "900"}}>
              PROXIMO
            </span>
            <span> </span>
            <span style={{fontWeight: "900"}}>
              PROJECTS
            </span>
          </span>


            <p></p>
            <span >
              LOUISE FINLAY
            </span>


</FadeIn>




            </h1>

          </span>



        </Container> : <Container style={{paddingTop: "200px", paddingRight: "0px", paddingLeft: "5px", marginRight: "50px"}}>
          <span>

            <h1 className="title" style={{textAlign: "center", fontSize: "60px", letterSpacing: "5px", fontWeight: "300"}}>
              <FadeIn delay='500' transitionDuration='1000'>
                <span>
            <span style={{fontWeight: "900"}}>
              PROXIMO
            </span>
            <span> </span>
            <span style={{fontWeight: "900"}}>
              PROJECTS
            </span>
          </span>


            <p></p>
            <span >
              LOUISE FINLAY
            </span>


</FadeIn>

          </h1>


        </span>



        </Container>}

        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
