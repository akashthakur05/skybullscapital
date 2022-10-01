import React from "react";
import { Link } from "react-router-dom";
import Question from "../../../components/FAQ/Question";

const HomeThreeFaq = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="faq__content">
                <div className="section-title mb-45">
                  <h2>
                    Do you have <br /> Any question ?
                  </h2>
                  <p>Feel free to reach us our team is readily available.</p>
                </div>
                <Link to="/faq" className="z-btn z-btn-border">
                  Visit FAQ
                </Link>
              </div>
            </div>
            <Question qunatity={'4'}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThreeFaq;
