import React from "react";
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
  fontSize: "7px"
}

function PillarPageHeader() {
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/palm-trees.jpg") + ")",

          }}
          ref={pageHeader}
        ></div>
      {dimensions.width > 1000 ? <div className="content-left">
        <Container style={{padding: "0px", paddingTop: "250px"}}>
          <h1 className="title" style={{textAlign: "left", fontSize: "60px", letterSpacing: "5px", fontWeight: "900"}}>
            <FadeIn delay='500' transitionDuration='1000'>
            <span >
               MEET LOUISE
            </span>
          </FadeIn>
          </h1>

        </Container>

      </div> :
      <div className="content-center">
        <Container style={{padding: "0px", paddingTop: "100px"}}>
          <h1 className="title" style={{textAlign: "center", fontSize: "60px", letterSpacing: "5px", fontWeight: "900"}}>
            <FadeIn delay='500' transitionDuration='1000'>
            <span >
               MEET LOUISE
            </span>
            </FadeIn>
          </h1>

        </Container>

      </div>
    }

      </div>
    </>
  );
}

export default PillarPageHeader;
