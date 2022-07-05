import React from "react";
import "./Services.css";

const ServiceItem = [
  {
    id: "1",
    imageUrl: "/asset/cogs.png",
    title: "EASY THEME SETUP",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "2",
    imageUrl: "/asset/pencil.svg",
    title: "PIXEL PERFECT DESIGN",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "3",
    imageUrl: "/asset/mobile.svg",
    title: "RESPONSIVE DISPLAY",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "4",
    imageUrl: "/asset/clock.svg",
    title: "24/7 SUPPORT",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "5",
    imageUrl: "/asset/cogs.png",
    title: "EASY THEME SETUP",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "6",
    imageUrl: "/asset/pencil.svg",
    title: "PIXEL PERFECT DESIGN",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "7",
    imageUrl: "/asset/mobile.svg",
    title: "RESPONSIVE DISPLAY",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
  {
    id: "8",
    imageUrl: "/asset/clock.svg",
    title: "24/7 SUPPORT",
    textItem:
      " Nunc mattis lorem in leo loborits, ut venenatis justo commado. Maecenas a justo nec velit egestas fermentum ",
  },
];

const Services = () => {
  return (
    <div className="conatiner-fluid Service-ct ">
      <div className="container ">
        <div className=" d-flex justify-content-start heading-ct mt-5">
          <img
            src="/asset/border left.png"
            alt="sideLine"
            className="side-line"
          />
          <p className="ps-3 heading-service">WHAT WE DO</p>
        </div>

        <div className="d-flex flex-wrap mt-5 justify-content-between">
          {ServiceItem.map((sitem) => (
            <div className="mb-5 service-itemBox" key={sitem.id}>
              <div className="service-image">
                <img src={sitem.imageUrl} alt="service-images" />
              </div>
              <div className="service-text mt-4">
                <p className="Service-title">{sitem.title}</p>
                <p className="Service-text">{sitem.textItem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
