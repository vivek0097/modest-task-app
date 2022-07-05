import React, { useState } from "react";
import "./Work.css";

const workImg = [
  {
    id: "1",
    imgSrc: "/asset/pic6.png",
  },
  {
    id: "2",
    imgSrc: "/asset/pic7.png",
  },
  {
    id: "3",
    imgSrc: "/asset/pic8.png",
  },
  {
    id: "4",
    imgSrc: "/asset/pic9.png",
  },
  {
    id: "5",
    imgSrc: "/asset/pic23.png",
  },
  {
    id: "6",
    imgSrc: "/asset/pic22.png",
  },
  {
    id: "7",
    imgSrc: "/asset/pic11.png",
  },
  {
    id: "8",
    imgSrc: "/asset/pic12.png",
  },
  {
    id: "9",
    imgSrc: "/asset/pic13.png",
  },
  {
    id: "10",
    imgSrc: "/asset/pic14.png",
  },
  {
    id: "11",
    imgSrc: "/asset/pic20.png",
  },
  {
    id: "12",
    imgSrc: "/asset/bg3.png",
  },
  {
    id: "13",
    imgSrc: "/asset/pic9.png",
  },
  {
    id: "14",
    imgSrc: "/asset/pic23.png",
  },
  {
    id: "15",
    imgSrc: "/asset/pic22.png",
  },
  {
    id: "16",
    imgSrc: "/asset/pic11.png",
  },
  {
    id: "17",
    imgSrc: "/asset/pic12.png",
  },
  {
    id: "18",
    imgSrc: "/asset/pic13.png",
  },
];

const Work = () => {
  const [data, setData] = useState(workImg);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
    setData([...data]);
    // console.log(data);
  };

  return (
    <div className="container-fluid work-ct mb-5">
      <div className="container  mt-5">
        <div className=" d-flex justify-content-start heading-ct mt-5 pt-5">
          <img
            src="/asset/border left.png"
            alt="sideLine"
            className="side-line"
          />
          <p className="ps-3 heading-work">LOVELY WORK</p>
        </div>

        <div className="d-flex flex-wrap mt-5  justify-content-md-between">
          {data.slice(0, visible).map((items) => (
            <div className="card work-cards mt-5" key={items.id}>
              <div className="work-iamges">
                <img
                  src={items.imgSrc}
                  alt="work-images"
                  style={{ width: "100%", height: "230px" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="loadmore-btn d-flex justify-content-center mt-5">
          {visible <= data.length ? (
            <button
              className="loadm-btn px-3  mb-5"
              onClick={() => showMoreItems()}
            >
              SHOW ME MORE
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Work;
