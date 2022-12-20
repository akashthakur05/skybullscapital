import React from "react";
import PageHelmet from "./../../components/shared/PageHelmet";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import Question from "./../../components/FAQ/Question";
import HomeFooter from "../Main/HomeFooter/HomeFooter";
import HomeHeader from "../Main/HomeHeader/HomeHeader";
function Faq(props) {
  return (
    <>
      <PageHelmet pageTitle="FAQ Page" />
      <HomeHeader />
      <CommonPageHeader title="Frequntly Asked Questions" subtitle="Services" />
      <div className="container my-2">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="faq__content">
              <div className="section-title faq__content__block mb-45">
                <h2>Do you have Any question ?</h2>
                <p>Feel free to reach us our team is readily available.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="faq__content">
              <Question className='col-xl-12 col-lg- col-md-12 ' />
            </div>
          </div>
        </div>
      </div>

      <CommonCtaArea
        data={{ link2: "/faq", text2: "FAQ", link1: "", text1: "" }}
      />

      <HomeFooter />
    </>
  );
}

export default Faq;
