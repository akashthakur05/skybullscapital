import React from "react";
import PageHelmet from "./../../components/shared/PageHelmet";
import HomeThreeHeader from "./../HomeThree/HomeThreeHeader/HomeThreeHeader";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import HomeThreeFooter from "./../HomeThree/HomeThreeFooter/HomeThreeFooter";
function Branch(props) {
  return (
    <>
      <PageHelmet pageTitle="Our Branches" />
      <HomeThreeHeader />
      <CommonPageHeader title="Branch" subtitle="Our Branch" />

      <CommonCtaArea
        data={{ link2: "/faq", text2: "FAQ", link1: "", text1: "" }}
      />

      <HomeThreeFooter />
    </>
  );
}

export default Branch;
