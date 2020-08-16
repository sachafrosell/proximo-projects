import React from "react";
import {Link} from "react-router-dom"

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
          <Container style={{paddingTop: "300px", paddingRight: "0px", paddingLeft: "0px", marginRight: "50px"}}>
            {dimensions.width >= 600 ? <span> <h1 className="title" style={{textAlign: "right", fontSize: "60px", letterSpacing: "5px", fontWeight: "300"}}>
              <span style={{fontWeight: "900"}}>
                PROXIMO
              </span>
              <span> </span>
              <span style={{fontWeight: "900"}}>
                PROJECTS
              </span>
              <span> </span>
              <br></br>
              <p></p>
              <span >
                LOUISE FINLAY
              </span>




            </h1>
              
            </span> : <span><h1 className="title" style={{textAlign: "left", fontSize: "30px", letterSpacing: "5px", fontWeight: "300"}}>
              <span >
                BUILDING
              </span>
              <span> </span>
            <br />
              <span style={{fontWeight: "900"}}>
                SUSTAINABLE
              </span>
              <br />
              <span >
                INFRASTRUCTURE
              </span>

            </h1>
            <Row>

              <Link to='/arc-roads'>
                <Button style={ButtonStyle}>
                  ARC ROAD
                </Button>
              </Link>

              <Link to='/arc-housing'>
                <Button style={ButtonStyle}>
                  ARC HOUSING
                </Button>
              </Link>
            </Row>
            <Row style={{paddingTop: "20px"}}>
              <Link to='/contact'>
                <Button style={ButtonStyle}>
                  GET IN TOUCH
                </Button>
              </Link>

            </Row>






          </span>}



          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
