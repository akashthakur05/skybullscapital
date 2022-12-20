import React from "react";
import PageHelmet from "./../../components/shared/PageHelmet";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import HomeHeader from "../Main/HomeHeader/HomeHeader";
import HomeFooter from "../Main/HomeFooter/HomeFooter";
function Branch(props) {
  return (
    <>
      <PageHelmet pageTitle="Our Branches" />
      <HomeHeader />
      <CommonPageHeader title="Branch" subtitle="Our Branch" />
      <CommonCtaArea
        data={{ link2: "/faq", text2: "FAQ", link1: "", text1: "" }}
      />
      <HomeFooter />
    </>
  );
}

export default Branch;
