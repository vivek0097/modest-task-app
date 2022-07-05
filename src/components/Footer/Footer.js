import React from "react";
import "./Footer.css";
import { FaSkype, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 d-flex pl-4 justify-content-start order-2 order-md-1 order-lg-1">
            ©Copyright 2014 by PSD Booster. All Rights Reserved
          </div>
          <div className="col-12 col-md-6 col-lg-6 order-1 order-md-2 order-lg-2">
            <ul className="list-unstyled d-flex  justify-content-md-end justify-content-center px-3 justify-content-lg-end  sm-ftr">
              <li className="mx-2 ">
                <a href="https://twitter.com/" target="_blank">
                  <img
                    src="/asset/L.png"
                    alt="twitter"
                    className="icon-size"
                    style={{ color: "white", height: "22px", width: "22px" }}
                  />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src="/asset/F.png"
                    alt="facebook"
                    className="icon-size"
                    style={{
                      color: "white",
                      height: "22px",
                      width: "22px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.skype.com/en/" target="_blank">
                  <FaSkype
                    style={{ color: "white", height: "22px", width: "22px" }}
                    className="icon-size"
                  />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    src="/asset/e.png"
                    alt="instra"
                    className="icon-size"
                    style={{ color: "white", height: "20px", width: "22px" }}
                  />
                </a>
              </li>
              <li className="mx-2 ">
                <a href="https://www.linkedin.com/" target="_blank">
                  {
                    <FaLinkedinIn
                      style={{ color: "white", height: "30px", width: "22px" }}
                    />
                  }
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
