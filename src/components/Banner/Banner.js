import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid ps-0 pe-0 mt-0">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="items">
          <img
            className="d-block d-lg-block d-none lg-image w-100 img-index position-relative  "
            style={{
              backgroundImage: "url('asset/pic.png')",
              height: "80vh",
              width: "90vw",
              alt: "slideone",
            }}
          />

          <img
            className=" position-relative d-block d-lg-none sm-image "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#f000 0,rgba(136,4,9,.637) 80%),url('asset/pic.png')",
              height: "73vh",
              objectFit: "cover",
              width: "100vw",
              alt: "slideonesmall",
            }}
          />

          <Carousel.Caption className="">
            <div className="caption-text">
              <h1 className="text-white d-flex justify-content-start  heading-banner ">
                WELCOME TO OUR MARKETPLACE
              </h1>
              <p className="text-white  d-flex justify-content-start text-banner ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </p>

              <div className="d-flex ">
                <button className="p-2 px-3 view-more">VIEW MORE</button>
                <button className="mx-2 p-2 px-3 view-video">VIDEO TOUR</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-lg-block d-block  d-none  img-index w-100 "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#f000 0,rgba(136,4,9,.637) 80%), url('https://www.kotakmf.com/balancedadvantagefunds/assets/banner2/Banner%2002.webp')",
              height: "80vh",
              width: "100vw",
              alt: "slidetwolg",
            }}
          />
          <img
            className=" position-relative d-block d-lg-none sm-image  "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#f000 0,rgba(136,4,9,.637) 80%), url('https://www.kotakmf.com/balancedadvantagefunds/assets/banner2/Banner%2002.webp')",
              height: "73vh",
              width: "100vw",
              alt: "slidetwosmall",
            }}
          />

          <Carousel.Caption className=" d-sm-block d-md-block d-block">
            <div className="caption-text">
              <h1 className="text-white d-flex justify-content-start  heading-banner ">
                WELCOME TO OUR MARKETPLACE
              </h1>
              <p className="text-white  d-flex justify-content-start text-banner ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </p>

              <div className="d-flex ">
                <button className="p-2 px-3 view-more">VIEW MORE</button>
                <button className="mx-2 p-2 px-3 view-video">VIDEO TOUR</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block d-lg-block d-none img-index w-100 "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#f000 0,rgba(136,4,9,.637) 80%), url('https://www.kotakmf.com/balancedadvantagefunds/assets/banner2/Banner%2003.webp')",
              height: "80vh",
              width: "100vw",
              alt: "slidethreelg",
            }}
          />
          <img
            className="  position-relative d-block d-lg-none sm-image "
            style={{
              backgroundImage:
                "linear-gradient(180deg,#f000 0,rgba(136,4,9,.637) 80%), url('https://www.kotakmf.com/balancedadvantagefunds/assets/banner2/Banner%2003.webp')",
              height: "73vh",
              width: "100vw",
              alt: "slidetwosmall",
            }}
          />
          <Carousel.Caption className="">
            <div className="caption-text">
              <h1 className="text-white d-flex justify-content-start  heading-banner ">
                WELCOME TO OUR MARKETPLACE
              </h1>
              <p className="text-white  d-flex justify-content-start text-banner ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </p>

              <div className="d-flex ">
                <button className="p-2 px-3 view-more">VIEW MORE</button>
                <button className="mx-2 p-2 px-3 view-video">VIDEO TOUR</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
