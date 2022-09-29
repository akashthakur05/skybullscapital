import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeThreeSingleService from "../../../components/HomeThreeSingleService/HomeThreeSingleService";
import HomeTwoSingleFeature from "./../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature";
import { IoDocumentTextOutline } from "react-icons/io5";

const HomeThreeServices = () => {
  return (
    <>
      <section
        className="services__area-2 mt--120 pt-270 pb-140 p-relative"
        style={{
          background: `url(assets/img/bg/wave-bg-2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            {/* <HomeThreeSingleService image="1" title="Share Knowledge" subtitle="Data Tracking" />
                  <HomeThreeSingleService image="2" title="Meet New Friends" subtitle="User Experience" />
                  <HomeThreeSingleService image="3" title="Customer Service" subtitle="App Design" />
                  <HomeThreeSingleService image="4" title="Strategic advice" subtitle="Press Releases" /> */}
            <div className="col-xl-3 col-lg-6">
              <HomeTwoSingleFeature
                icon={<FaLightbulb />}
                title="GST
                Registration and Fillings"
              />
            </div>
            <div className="col-xl-3 col-lg-6">
              <HomeTwoSingleFeature
                icon={<FaLightbulb />}
                title="Income Tax
              File Your Return"
              />
            </div>

            <div className="col-xl-3 col-lg-6">
              <HomeTwoSingleFeature
                icon={<FaLightbulb />}
                title="Startup
                Registration & Startup Support"
              />
            </div>
            <div className="col-xl-3 col-lg-6">
              <HomeTwoSingleFeature
                icon={<FaLightbulb />}
                title="Technical Support and Assistance"
              />
            </div>
          </div>
          <div className="about__area-2 pt-130">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="about__thumb-2 about__thumb_customsize p-relative m-img">
                  <img src="assets/img/about/about-2.svg" className="w-100 h-100" alt="" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about__content">
                  <div className="section__title section__title-3 mb-25">
                    <h2>What  <br/> SkyBullBapitals  <br/> Offers</h2>
                  </div>
                  <p>
                    We are a technology-driven platform, offering services that cover the legal needs of startups and established businesses through our best
                    team intelligence and needs.
                  </p>
                  <div className="about__list">
                    <ul>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Premium Quality
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
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Fast Service
                        </span>
                      </li>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Affordable Prices
                        </span>
                      </li>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Trusted Relationship
                        </span>
                      </li>
                      <li>
                        <span>
                          <i>
                            {" "}
                            <FaCheck />{" "}
                          </i>
                          Simple & Reliable
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/service" className="z-btn">
                    Explore Services
                    <i>
                      {" "}
                      <CgArrowLongRight />{" "}
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThreeServices;
