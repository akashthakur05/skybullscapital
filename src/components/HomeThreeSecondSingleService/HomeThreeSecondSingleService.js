import React from "react";
import { Link } from "react-router-dom";
import { generateKey } from "./../../utils/randomKey";

const HomeThreeSecondSingleService = ({ title }) => {
  const feature = [
    { id: 1, text: " It provides rebates on various taxes." },
    { id: 2, text: "  Get Cheap bank loans.." },
    { id: 3, text: " They have quick credit with low interest rates." },
    {
      id: 4,
      text: "  Get tariff subsidies and tax and capital subsidies..",
    },
    { id: 5, text: " Reduces the cost of doing patents." },
  ];
  return (
    <>
      <div className="services__nav-content pt-90 pb-90">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="services__thumb text-lg-right m-img">
              <img src="/assets/img/services/services-1.svg" alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="services__content-3 pl-70 pr-70">
              <h3>{title}</h3>
              <p>
                The bee's knees cockup loo cracking goal hotpot bits and bobs a
                load of old tosh bubble and squeak arse over tit twit, excuse my
                French bevvy Eaton argy-bargy amongst codswallop.
              </p>
              <div className="services__icon-wrapper d-md-flex mb-35">
                <div className="services__icon-item d-flex mr-60 mb-30">
                  <div className="icon mr-20">
                    <img
                      style={{ height: "48px", weight: "48px" }}
                      src="/assets/img/icon/services/service-9.svg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h3>Acquisitions Finance Consulting</h3>
                  </div>
                </div>
                <div className="services__icon-item d-flex mb-30">
                  <div className="icon mr-20">
                    <img
                      style={{ height: "48px", weight: "48px" }}
                      src="/assets/img/icon/services/service-10.svg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h3>Private Placement Consulting</h3>
                  </div>
                </div>
   
              </div>
              <div className="services__list mb-40">
                  <ul>
                    {feature.map((arr) => (
                      <li key={generateKey(arr.text)}>{arr.text}</li>
                    ))}
                  </ul>
                </div>
              <Link to="/contact" className="z-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThreeSecondSingleService;
