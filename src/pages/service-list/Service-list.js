import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHelmet from "./../../components/shared/PageHelmet";
import HomeThreeHeader from "./../HomeThree/HomeThreeHeader/HomeThreeHeader";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import HomeThreeFooter from "./../HomeThree/HomeThreeFooter/HomeThreeFooter";
import { capitalize } from './../../utils/capitalize';
import HomeAbout from './../Home/HomeAbout/HomeAbout';
import ServiceListFeature from './../../components/ServiceListFeature/ServiceListFeature';
import { serviceListData } from './../../data/serviceList';
const ServiceList = (props) => {
  let { slug } = useParams();
  let navigate = useNavigate()
  const data  = serviceListData[slug]
  if(!data){
    navigate('/')
  }
  const unslug = slug.split('-').join(" ")
  return (
    <>
      <PageHelmet pageTitle={capitalize(unslug)} />
      <HomeThreeHeader />
      <CommonPageHeader title={data.header} subtitle="Service" />
      <ServiceListFeature/>
      <CommonCtaArea
        data={{ link2: "/services", text2: "Explore More", link1: "", text1: "" }}
      />

      <HomeThreeFooter />
    </>
  );
};

export default ServiceList;
