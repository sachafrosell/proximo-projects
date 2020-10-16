import React from 'react'

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
  CardText,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"

import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'
import { Document, Page, pdfjs } from 'react-pdf';
import Background from './assets/img/Calacatta.jpg';
import { Parallax } from 'react-scroll-parallax';
import LazyLoad from 'react-lazy-load';

//backgroundimage
// backgroundImage: "url(" + Background + ")", backgroundSize: "cover"



import finalPresentation from './assets/sherman-residence.pdf'
import ImgArr from './drawings.js'

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

const items = [
  {
    page: 0,
    altText: "Page 0",
    caption: "Page 0"
  },
  {
    page: 1,
    altText: "Page 1",
    caption: "Page 1"
  },
  {
    page: 2,
    altText: "Page 2",
    caption: "Page 2"
  },
  {
    page: 3,
    altText: "Page 3",
    caption: "Page 3"
  },
  {
    page: 4,
    altText: "Page 4",
    caption: "Page 4"
  },
  {
    page: 5,
    altText: "Page 5",
    caption: "Page 5"
  }

];

//<Document file={finalPresentation} style={{borderRadius: "0px"}}>
//  <Page pageNumber={item.page} width={dimensions.width/2.29}/>
//</Document>







function About() {
  store.dispatch({
    type: "COLOR",
    payload: "BLACK"
  })
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

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


  const [activeIndex, setActiveIndex] = React.useState(0);
 const [animating, setAnimating] = React.useState(false);
 const onExiting = () => {
   setAnimating(true);
 };
 const onExited = () => {
   setAnimating(false);
 };
 const next = () => {
   if (animating) return;
   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
   setActiveIndex(nextIndex);
 };
 const previous = () => {
   if (animating) return;
   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
   setActiveIndex(nextIndex);
 };
 const goToIndex = newIndex => {
   if (animating) return;
   setActiveIndex(newIndex);
 };


  return (
    <>
      {dimensions.width > 1000 ? <div
        style=
        {{textAlign: "center",
          paddingBottom: "125px",

        background: "#cdcdcd" }}

                                 >


        <Row>
          <Col>
            <div style={{backgroundColor: "white", margin: "left", marginLeft: "50px", maxWidth: dimensions.width / 2.3}}>

              <Carousel activeIndex={activeIndex} next={next} previous={previous} >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >

                      <img src={ImgArr[item.page]}>

                      </img>



                      <div className="carousel-caption d-none d-md-block">

                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"

                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                  style={{marginLeft: "-50px", opacity: "60%"}}

                >
                  <i className="now-ui-icons arrows-1_minimal-left" ></i>
                </a>
                <a
                  className="carousel-control-next"

                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                  style={{marginRight: "-50px", opacity: "60%"}}
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>

            </div>
          </Col>
          <Col >
            <div style={{paddingRight: '50px'}}>

              <h2 style={{textAlign: 'left', paddingTop: "100px"}}>
                Bring your ideas to life
              </h2>

              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>
                Hand drawn plans and elevations can help you envision your space.
              </h5>


            </div>

          </Col>
        </Row>

      </div> : <div
        style=
        {{textAlign: "center",
        paddingBottom: "50px",
        background: "#cdcdcd" }}

      >

            <div style={{backgroundColor: "white", marginLeft: "50px", marginRight: '50px'}}>

              <Carousel activeIndex={activeIndex} next={next} previous={previous} >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >

                        <img src={ImgArr[item.page]}>

                        </img>



                        <div className="carousel-caption d-none d-md-block">

                        </div>
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"

                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                    style={{marginLeft: "-50px", opacity: "80%"}}
                  >
                    <i className="now-ui-icons arrows-1_minimal-left" ></i>
                  </a>
                  <a
                    className="carousel-control-next"

                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                    style={{marginRight: "-50px", opacity: "80%"}}
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>

              </div>

              <div style={{paddingRight: '50px', paddingLeft: "50px", paddingBottom: "50px"}}>
                <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px", paddingTop: "50px"}}>


                We can bring your ideas to life with hand drawn plans and elevations.


                </h5>

              </div>




        </div>}






    </>
  );
}

export default About;
