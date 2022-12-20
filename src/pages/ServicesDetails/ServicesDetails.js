import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import PageHelmet from '../../components/shared/PageHelmet';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import ServicesDetailsHeader from './ServicesDetailsHeader/ServicesDetailsHeader';
import { slugtoData } from '../../data/serviceDetail';
import HomeFooter from './../Main/HomeFooter/HomeFooter';
import HomeHeader from './../Main/HomeHeader/HomeHeader';
const ServicesDetails = () => {
   let { slug } = useParams();
   const [pageData, setPageData] =  useState(slugtoData(slug))
   return (
      <>
         <PageHelmet pageTitle="Services Details Page" />
         <HomeHeader />
         <ServicesDetailsHeader data={pageData} />
         <ServicesDetailsArea data={pageData} />
         <HomeFooter />
      </>
   );
};

export default ServicesDetails;