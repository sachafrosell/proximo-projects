/*eslint-disable*/
import React from "react";
import ProximoLogo from "../../assets/img/proximo-logobig.PNG"
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Container,
  Row,
  Col
 } from "reactstrap";

const aStyle = {
  fontSize: "15px",
  textAlign: "center"
}

const aPadd = {
  marginTop: "10px"
}

function InfoFooter() {

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
    <div>

    {dimensions.width > 500 ?
      <div style={{background: "#cdcdcd", color: "black"}}>
        <div style={{paddingLeft: "50px"}}>
          <Row  style={{paddingTop: "20px", paddingBottom: "20px"}}>
            <Col  md="5">
              <div>


                <img
                  src={ProximoLogo}
                  style={{
                    width: 100,
                    position: 10,
                    paddingBottom: 20,
                    opacity: "80%"
                  }}
                >
                </img>

              </div>
              <h5 style={{fontSize: "13px", opacity: "50%"}}>
                Proximo Projects is an interior design firm in Miami Beach.
              </h5>
              <div className="copyright" id="copyright" style={{fontSize: "13px", opacity: "20%"}}>
                © {new Date().getFullYear()}, Proximo Projects


              </div>
            </Col>
            <Col md="3">
            </Col>
            <Col md="2" style={{paddingLeft: "15px", paddingBottom: "20px"}}>
              <h5 style={{fontSize: "15px"}}>
                MENU
              </h5>
              <div style={{fontSize: "13px", opacity: "50%"}}>
                <Link to='/'>
                  <a style={{color: "black"}}>
                    HOME
                  </a>
                </Link>
                <p style={{marginTop: "-10px"}}></p>
                  <Link to='/about'>
                    <a style={{color: "black"}}>
                      ABOUT
                    </a>
                  </Link>
                  <p style={{marginTop: "-10px"}}></p>
                <Link to='/contact'>

                  <a style={{color: "black"}}>
                    CONTACT US
                  </a>
                </Link>
                <p style={{marginTop: "-10px"}}></p>









              </div>
            </Col>
            <Col md="2" style={{paddingLeft: "15px"}}>

              <h5 style={{fontSize: "15px"}}>
                CONTACT
              </h5>
              <div style={{fontSize: "13px", opacity: "50%"}}>

                <a>
                  1228 west Ave,
                </a>
                <br />
                <a>
                  Miami Beach,
                </a>
                <br />
                <a>
                  FL 33139,
                </a>
                <br />
                <a>
                  louise@proximoprojects.com
                </a>
              </div>


            </Col>
          </Row>
        </div>
      </div>
      : <div style={{background: "#cdcdcd", color: "black"}}>
        <div >
          <Row  style={{paddingTop: "20px", paddingBottom: "20px", width: '100%'}}>
            <Col  md="auto">
              <div>


                <img
                  src={ProximoLogo}
                  style={{
                    width: 100,
                    position: 10,
                    paddingBottom: 20,
                    opacity: "80%"
                  }}
                >
                </img>

              </div>
              <h5 style={{fontSize: "13px", opacity: "50%"}}>
                Proximo Projects is an interior design firm in Miami Beach.
              </h5>

            </Col>
            <Col md="auto">
            </Col>
            <Col md="auto" style={{paddingBottom: "20px"}}>
              <h5 style={{fontSize: "15px"}}>
                MENU
              </h5>
              <div style={{fontSize: "13px", opacity: "50%"}}>
                <Link to='/'>
                  <a style={{color: "black"}}>
                    HOME
                  </a>
                </Link>
                <p style={{marginTop: "-10px"}}></p>
                  <Link to='/about'>
                    <a style={{color: "black"}}>
                      ABOUT
                    </a>
                  </Link>
                  <p style={{marginTop: "-10px"}}></p>
                <Link to='/contact'>

                  <a style={{color: "black"}}>
                    CONTACT US
                  </a>
                </Link>
                <p style={{marginTop: "-10px"}}></p>









              </div>
            </Col>
            <Col md="auto">

              <h5 style={{fontSize: "15px"}}>
                CONTACT
              </h5>
              <div style={{fontSize: "13px", opacity: "50%"}}>

                <a>
                  1228 west Ave,
                </a>
                <br />
                <a>
                  Miami Beach,
                </a>
                <br />
                <a>
                  FL 33139,
                </a>
                <br />
                <a>
                  louise@proximoprojects.com
                </a>
              </div>


            </Col>
          </Row>
        </div>
      </div>
    }
      </div>


  );
}

export default InfoFooter;
