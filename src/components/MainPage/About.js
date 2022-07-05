import React from "react";
import "./About.css";

const AboutList = [
  {
    id: "1",
    imgSrc: "/asset/pic5.png",
    name: "GLORIA BROMLEY",
    title: "CEO nad Founder",
    linkdn: "/asset/social-linkedin.svg",
    facebook: "/asset/F.png",
    twitter: "/asset/L.png",
  },
  {
    id: "2",
    imgSrc: "asset/pic4.png",
    name: "PAUL TORRES",
    title: "Head of Development",
    linkdn: "/asset/social-linkedin.svg",
    facebook: "/asset/F.png",
    twitter: "/asset/L.png",
  },
  {
    id: "3",
    imgSrc: "asset/pic3.png",
    name: "JUDITH GELLETTE",
    title: "Graphic Designer",
    linkdn: "/asset/social-linkedin.svg",
    facebook: "/asset/F.png",
    twitter: "/asset/L.png",
  },
  {
    id: "4",
    imgSrc: "asset/pic2.png",
    name: "DELORES REED",
    title: "Client Service Director",
    linkdn: "/asset/social-linkedin.svg",
    facebook: "/asset/F.png",
    twitter: "/asset/L.png",
  },
];

const About = () => {
  return (
    <div className="container-fluid about-ct">
      <div className="container">
        <div className=" d-flex justify-content-start heading-ct mt-5">
          <img
            src="/asset/border left.png"
            alt="sideLine"
            className="side-line"
          />
          <p className="ps-3 heading-about">WE ARE MODEST</p>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-7 col-lg-7 order-2 order-lg-1 order-md-1">
            <div className="about-text mt-lg-0 mt-md-0 mt-5">
              <p className="about-paraText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <p className="about-paraText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
              </p>
            </div>
            <div className="about-social mt-5">
              <ul className="list-unstyled d-flex">
                <li className="social-list">
                  <a href="https://www.facebook.com/">
                    <img src="/asset/F.png" alt="facebook" />
                  </a>
                </li>
                <li className="social-list">
                  <a href="https://twitter.com/">
                    <img src="/asset/L.png" alt="twitter" />
                  </a>
                </li>
                <li className="social-list">
                  <a href="https://www.google.com/search?q=google+.com&oq=google+.com&aqs=chrome..0i20i263i512j69i57j0i131i433i512j0i512l6j69i64.9085j0j15&sourceid=chrome&ie=UTF-8">
                    <img src="/asset/g.png" alt="google" />
                  </a>
                </li>
                <li className="social-list">
                  <a href="https://dribbble.com/tags/login">
                    <img src="/asset/D.png" alt="dribble" />
                  </a>
                </li>
                <li className="social-list">
                  <a href="https://www.behance.net/">
                    <img src="/asset/e.png" alt="behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-5 order-1 order-lg-2 order-md-2 ">
            <div className="d-flex">
              {" "}
              <span className="num-item ">01</span>
              <div className="num-text d-block ps-3">
                <h4 className="article-heading ">DEDICATION TO THE CUSTOMER</h4>
                <p className="about-paraText ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt{" "}
                </p>
              </div>
            </div>
            <div className="d-flex mt-2">
              {" "}
              <span className="num-item ">02</span>
              <div className="num-text d-block ps-3">
                <h4 className="article-heading ">
                  WORKING CLOSELY WITH OUR CLIENTS
                </h4>
                <p className="about-paraText ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt{" "}
                </p>
              </div>
            </div>
            <div className="d-flex mt-2">
              {" "}
              <span className="num-item ">03</span>
              <div className="num-text d-block ps-3">
                <h4 className="article-heading ">INCREASE HAPPINESS</h4>
                <p className="about-paraText ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="line-hz  mt-4 ps-0 pe-0"></hr>
      <div className="container team-ct">
        <div className=" d-flex justify-content-start heading-ct mt-5">
          <img
            src="/asset/border left.png"
            alt="sideLine"
            className="side-line"
          />
          <p className="ps-3 heading-about">MEET THE TEAM</p>
        </div>

        <div className="d-flex flex-wrap justify-content-md-between mt-5 crd-items">
          {AboutList.map((item) => (
            <div className="card team-cards mb-5" key={item.id}>
              <div className="about-pic">
                <img
                  className="about-pic__img"
                  src={item.imgSrc}
                  alt="team"
                  style={{ width: "100%", height: "268px" }}
                />
                <div className="about-pic__overlay">
                  <ul className="team-icons d-flex list-unstyled">
                    <li className="team-social">
                      {" "}
                      <a href="https://twitter.com/" target="_blank">
                        {" "}
                        <img
                          src={item.twitter}
                          style={{ width: "25px", height: "25px" }}
                        />{" "}
                      </a>
                    </li>
                    <li className="team-social">
                      <a href="https://www.facebook.com/" target="_blank">
                        <img
                          src={item.facebook}
                          style={{
                            width: "25px",
                            height: "25px",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                          }}
                        />{" "}
                      </a>
                    </li>
                    <li className="team-social ">
                      {" "}
                      <a href="https://www.linkedin.com/" target="_blank">
                        <img
                          src={item.linkdn}
                          style={{ width: "25px", height: "25px" }}
                        />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="crd-textCt">
                <p className="crd-txt mt-3 ps-3 mb-0">{item.name}</p>
                <p className="crd-txt ps-3 pb-1 ">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
