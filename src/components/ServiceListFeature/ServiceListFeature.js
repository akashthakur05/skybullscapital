import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const ServiceListFeature = () => {
  return (
    <>
      <section className="about__area pb-200 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pr-0 col-lg-6">
              <div className="section__title mb-25">
                <span>Who we are</span>
                <h2>We Unlock Potential</h2>
              </div>
              <div className="about__list">
                <ul>
                  <li>
                    <span>
                      <i>
                        {" "}
                        <FaCheck />{" "}
                      </i>
                      Innovative ideas
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>
                        {" "}
                        <FaCheck />{" "}
                      </i>
                      Professional assistance
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>
                        {" "}
                        <FaCheck />{" "}
                      </i>
                      Financial advisory
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="about__thumb m-img">
                <img
                  src="/assets/img/about/about-2.svg"
                  className="w-100 h-100"
                  alt=""
                />
                <div className="about__shape">
                  <img src="/assets/img/about/red-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceListFeature;
