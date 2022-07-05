import React, { useState } from "react";
import "./Contact.css";
import Modal from "react-modal";

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container-fluid contact-ct ps-0 pe-0 ">
      <div className="container ">
        <div className=" d-flex justify-content-start heading-ct pt-5 pb-5">
          <img
            src="/asset/border left.png"
            alt="sideLine"
            className="side-line"
          />
          <p className="ps-3 heading-contact">STAY IN TOUCH</p>
        </div>
      </div>
      <div className="container-fluid mt-5 contact-imgbg ps-0 pe-0">
        <img
          src="/asset/pic21.png"
          alt="bgimage"
          className="contact-imgbg"
          style={{ width: "100%", height: "172px" }}
        />
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12 ">
            <p className="contact-title"> CONTACT INFORMATION</p>
            <p className="contact-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt sed doeiusmod tempor incididunt{" "}
            </p>
            <p className="contact-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt sed doeiusmod tempor incididunt
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 order-sm-2 mb-5 pb-5">
            <div className="contact-btn ps-3">
              <button
                className="msg-btn px-3 p-2"
                onClick={() => setModalIsOpen(true)}
              >
                SEND MESSAGE
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
             
              >
                <form>
                  <div className="row flex-wrap  ">
                    <div className="col-6 d-block">
                      <lable>YOUR NAME</lable>
                      <input type="text" required />
                    </div>
                    <div className="col-6 d-block">
                      <lable>YOUR EMAIL</lable>
                      <input type="email" required />
                    </div>
                    <div className="col-12 d-block mt-5">
                      <lable>YOUR MESSAGE</lable>
                      <br></br>
                      <input type="text" required className="w-100 p-3" />
                    </div>
                  </div>
                </form>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
