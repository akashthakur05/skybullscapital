import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCapabilities from '../Home/HomeCapabilities/HomeCapabilities';
import HomeServices from '../Home/HomeServices/HomeServices';
import HomeThreeSecondServices from '../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeHeader from './../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from './../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomeTwoCaseArea from './../HomeTwo/HomeTwoCaseArea/HomeTwoCaseArea';

const Services = () => {
   return (
      <>
         <PageHelmet pageTitle="Services Page" />
         <HomeThreeHeader/>
         <CommonPageHeader title="Services" subtitle="Services" />
         <HomeServices />
         <HomeCapabilities/>
         <HomeTwoCaseArea/>
         <HomeThreeSecondServices />
         <CommonCtaArea  data={{link2:'/faq', text2:'FAQ', link1:'', text1:''}}/>

         
         <HomeThreeFooter/>
      </>
   );
};

export default Services;