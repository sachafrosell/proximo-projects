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
import ImgArr from './sherman-residence.js'

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
  },
  {
    page: 6,
    altText: "Page 6",
    caption: "Page 6"
  },
  {
    page: 7,
    altText: "Page 7",
    caption: "Page 7"
  }
  ,
{
  page: 8,
  altText: "Page 8",
  caption: "Page 8"
},
{
  page: 9,
  altText: "Page 9",
  caption: "Page 9"
},
{
  page: 10,
  altText: "Page 10",
  caption: "Page 10"
},
{
  page: 11,
  altText: "Page 11",
  caption: "Page 11"
},
{
  page: 12,
  altText: "Page 12",
  caption: "Page 12"
},
{
  page: 13,
  altText: "Page 13",
  caption: "Page 13"
},
{
  page: 14,
  altText: "Page 14",
  caption: "Page 14"
},
{
  page: 15,
  altText: "Page 15",
  caption: "Page 15"
},
{
  page: 16,
  altText: "Page 16",
  caption: "Page 16"
},
{
  page: 17,
  altText: "Page 17",
  caption: "Page 17"
},
{
  page: 18,
  altText: "Page 18",
  caption: "Page 18"
},
{
  page: 19,
  altText: "Page 19",
  caption: "Page 19"
},
{
  page: 20,
  altText: "Page 20",
  caption: "Page 20"
},
{
  page: 21,
  altText: "Page 21",
  caption: "Page 21"
},
{
  page: 22,
  altText: "Page 22",
  caption: "Page 22"
},

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
          paddingTop: "75px",
      background: "#cdcdcd" }}

    >

      <h1 title="Projects" style={{width: "400px", margin: "auto", padding: "10px"}}>
        OUR PROJECTS
      </h1>
      <div style={{justifyContent: "center"}}>
        <p style={{
            border: "0.5px solid black",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "50px",
            display: "block",
            maxWidth: "50px",

        }}></p>
      </div>
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
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>

            </div>
          </Col>
          <Col >
            <div style={{paddingRight: '50px'}}>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px", paddingTop: "10px"}}>


              The Sherman family approached Louise to help them with the transition to their next chapter – a large, light-filled two-bed, two and a half bath condo on Miami Beach.


              </h5>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>



              The brief for the project was to create a contemporary yet comfortable space where the family could entertain friends, explore their passion for cooking, spend time together and show off their collection of art, wine, books and mid-century modern and contemporary pieces collected over the years and through their travels.


              </h5>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>




              They also needed a space that their teenage daughter Sophia could call her own – a space tailored to her aesthetic where she could spend itme with her friends, do her studies and that would provide her with the privacy a teenage girl needs.

              </h5>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>




              In terms of specific design asks, the Sherman’s told Louise that they love bright colors and natural materials and that they needed lots of storage – both hidden and open.
              </h5>
            </div>

          </Col>
        </Row>

      </div> : <div
        style=
        {{textAlign: "center",
            paddingBottom: "125px",
            paddingTop: "75px",
        background: "#cdcdcd" }}

      >

        <h1 title="Projects" style={{ margin: "auto", padding: "10px"}}>
          <span>
            OUR
          </span>
          <p></p>
          <span>
            PROJECTS
          </span>


        </h1>
        <div style={{justifyContent: "center"}}>
          <p style={{
              border: "0.5px solid black",
              margin: "auto",
              marginTop: "10px",
              marginBottom: "50px",
              display: "block",
              maxWidth: "50px",

          }}></p>
        </div>


            <div style={{paddingRight: '50px', paddingLeft: "50px", paddingBottom: "75px"}}>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px", paddingTop: "10px"}}>


              The Sherman family approached Louise to help them with the transition to their next chapter – a large, light-filled two-bed, two and a half bath condo on Miami Beach.


              </h5>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>



              The brief for the project was to create a contemporary yet comfortable space where the family could entertain friends, explore their passion for cooking, spend time together and show off their collection of art, wine, books and mid-century modern and contemporary pieces collected over the years and through their travels.


              </h5>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>




              They also needed a space that their teenage daughter Sophia could call her own – a space tailored to her aesthetic where she could spend itme with her friends, do her studies and that would provide her with the privacy a teenage girl needs.

              </h5>
              <h5 className="description" style={{fontSize: "17px", textAlign: "left", color: "#3f3f3f", fontWeight: "500px"}}>




              In terms of specific design asks, the Sherman’s told Louise that they love bright colors and natural materials and that they needed lots of storage – both hidden and open.
              </h5>
            </div>



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
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>

              </div>




        </div>}






    </>
  );
}

export default About;
