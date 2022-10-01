import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import PageHelmet from '../../components/shared/PageHelmet';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import ServicesDetailsHeader from './ServicesDetailsHeader/ServicesDetailsHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import { slugtoData } from '../../data/serviceDetail';
const ServicesDetails = () => {
   let { slug } = useParams();
   const [pageData, setPageData] =  useState(slugtoData(slug))

   return (
      <>
         <PageHelmet pageTitle="Services Details Page" />

         <HomeThreeHeader />
         <ServicesDetailsHeader data={pageData} />
         <ServicesDetailsArea data={pageData} />
         <HomeThreeFooter />
      </>
   );
};

export default ServicesDetails;