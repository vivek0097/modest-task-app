import React from "react";
import "./Features.css";

const FeatureItem = [
  {
    id: "1",
    imgSrc: "/asset/fe1.png",
    title: "PRODUCT DESIGN: EMASH CHAIRS",
    ftext:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt orem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    id: "2",
    imgSrc: "/asset/fe2.png",
    title: "ELEGANT AND COLORFULL LOGOS",
    ftext:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt orem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    id: "3",
    imgSrc: "/asset/fe3.png",
    title: "A SHOWCASE OF CREATIVE",
    ftext:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt orem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
];

const Features = () => {
  return (
    <div className="container-fluid feature-ct mt-4">
      <div className="container ">
        <div className=" d-flex justify-content-start heading-ct pt-5 pb-5">
          <img
            src="/asset/border left.png"
            alt="sideLine"
            className="side-line"
          />
          <p className="ps-3 heading-feature">FEATURES</p>
        </div>

        <div className="mt-5 d-flex flex-wrap  justify-content-between ">
          {FeatureItem.map((fitem) => (
            <div className=" feature-box" key={fitem.id}>
              <div className="feature-images">
                <img
                  src={fitem.imgSrc}
                  alt="feature"
                  style={{ width: "100%", heigth: "100%" }}
                />
              </div>
              <div className="">
                <p className="feature-title mt-4">{fitem.title}</p>
                <p className="feature-text"> {fitem.ftext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
