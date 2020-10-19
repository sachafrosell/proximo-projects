import React, { useState } from "react";
import axios from 'axios';


// components
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"

import store from './Store.js'
import TukTukImg2 from './assets/img/tuk-tuk2.jpg'
import Team from './Team.js'
import SideBar from "./sidebar";
import './burgerstyle.css'
import './fade.css';
import LogoLight from "./assets/img/proximo-logo.PNG";
import disableScroll from 'disable-scroll';

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
  UncontrolledAlert,
  Alert,
  Form,
  FormGroup
} from "reactstrap";

// core ./components
import ExamplesNavbar2 from "./components/Navbars/ExamplesNavbar2.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";
import InfoFooter from "./components/Footers/InfoFooter.js"
import ContactHeader from "./ContactHeader.js"

const titleStyle = {
   fontWeight: "900px",
   fontSize: "20px",
   textDecoration: "underline"
}

const inputStyle = {
  fontSize: "15px"
}



function Contact () {

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

  const [fadeStyle, setFadeStyle] = React.useState({
    className: "divStyle",
    count: 0,
  })

  React.useEffect(() => {
    if (fadeStyle.count == 0) {
      setFadeStyle({
        className: "divStyleActive"
      })
    }
  })

  React.useEffect(() => {
    setTimeout(() => {
      disableScroll.off();
    }, 4000)
  })




const buttonControl = () => {
    store.dispatch({
      type: "SUCCESS",
      payload: true
    })
  }

 const sendEmail = (e) => {
    console.log(e)

  }

  const formSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            buttonText: 'Sending...'
        })

        axios.post('/api/sendmail', data)
        .then(res => {
            if(res.data.result !=='success') {
                setData({
                    ...data,
                    buttonText: 'Failed to send',
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'Sent',
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            //console.log(err.response.status)
            setData({
                ...data,
                buttonText: 'Failed to send',
                err: 'fail'
            })
        })
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Send Message',
            err: ''
        });
    }


  const [data, setData] = useState({name: 'Full Name...', email: 'Email...', subject: 'Subject...', message: 'Message...', sent: false, buttonText: 'Send Message', err: ''})


  const handleChange = (e) => {

      const {name, value} = e.target
          setData({
              ...data,
              [name]: value
      })


  }







      return (
        <>
        {disableScroll.on()}
        <div class={fadeStyle.className} style={{width: dimensions.width, height: dimensions.height, pointerEvents: 'none', touchEvents: 'none'}}>
          <img
            src={LogoLight}
            style={{
              position: 'absolute',
              top: ((dimensions.height/2)-100),
              left: ((dimensions.width/2)-100),
              width: '200px',
              height: '200px'
            }}
            />
        </div>

        <ExamplesNavbar2 />

          <ContactHeader />

          <Container>

            <div className="wrapper" style={{backgroundColor: "black"}}>

              <div className="section section-contact-us" style={{paddingTop:"20px", paddingBottom: "50px"}}>




                <Container style={{paddingTop: "40px"}}>
                  <div >
                    <Row>
                      <Col className="text-center ml-auto mr-auto" lg="8" md="12" style={inputStyle}>
                        <Form>
                          <InputGroup
                            className="name"
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{borderRadius: "0px"}}>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder={data.name}
                              type="text"
                              onChange={handleChange}
                              name="name"
                              style={{borderRadius: "0px"}}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className="email"
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{borderRadius: "0px"}}>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder={data.email}
                              type="text"
                              onChange={handleChange}
                              name="email"
                              style={{borderRadius: "0px"}}
                            ></Input>
                          </InputGroup>
                          <div className="textarea-container">
                            <Input
                              cols="80"
                              name="name"
                              placeholder={data.subject}
                              onChange={handleChange}
                              name="subject"
                              rows="1"
                              type="textarea"
                            ></Input>
                          </div>
                          <div className="textarea-container">
                            <Input
                              cols="80"
                              name="name"
                              placeholder={data.message}
                              onChange={handleChange}
                              name="message"
                              rows="4"
                              type="textarea"
                            ></Input>
                          </div>
                          <div>

                          </div>
                        </Form>
                        <Button

                          style={{borderRadius: "0px", background: "none", color: "#495057", border: "black"}}
                          size="lg"
                          onClick={formSubmit}
                        >
                          {data.buttonText}
                        </Button>




                      </Col>
                    </Row>
                  </div>

                </Container>





              </div>
            </div>
            <Alert color="success" isOpen={store.getState()}>
              Message Recieved
            </Alert>

          </Container>


          <InfoFooter />



        </>
      );



}

export default Contact;
