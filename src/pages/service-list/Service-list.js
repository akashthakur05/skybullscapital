import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHelmet from "./../../components/shared/PageHelmet";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import { capitalize } from './../../utils/capitalize';
import ServiceListFeature from './../../components/ServiceListFeature/ServiceListFeature';
import { serviceListData } from './../../data/serviceList';
import HomeHeader from "../Main/HomeHeader/HomeHeader";
import HomeFooter from "../Main/HomeFooter/HomeFooter";
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
      <HomeHeader />
      <CommonPageHeader title={data.header} subtitle="Service" />
      <ServiceListFeature/>
      <CommonCtaArea
        data={{ link2: "/services", text2: "Explore More", link1: "", text1: "" }}
      />
      <HomeFooter />
    </>
  );
};

export default ServiceList;
