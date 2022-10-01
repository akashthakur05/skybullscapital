import React from "react";
import { useParams } from "react-router-dom";
import PageHelmet from "./../../components/shared/PageHelmet";
import HomeThreeHeader from "./../HomeThree/HomeThreeHeader/HomeThreeHeader";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import HomeThreeFooter from "./../HomeThree/HomeThreeFooter/HomeThreeFooter";
import { capitalize } from './../../utils/capitalize';
const ServiceList = (props) => {
  let { slug } = useParams();
  const unslug = slug.split('-').join(" ")
  return (
    <>
      <PageHelmet pageTitle={capitalize(unslug)} />
      <HomeThreeHeader />
      <CommonPageHeader title={capitalize(unslug)} subtitle="Service" />
      <CommonCtaArea
        data={{ link2: "/services", text2: "Explore More", link1: "", text1: "" }}
      />

      <HomeThreeFooter />
    </>
  );
};

export default ServiceList;
