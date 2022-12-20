import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCapabilities from '../Home/HomeCapabilities/HomeCapabilities';
import HomeServices from '../Home/HomeServices/HomeServices';
import HomeFooter from '../Main/HomeFooter/HomeFooter';
import HomeHeader from './../Main/HomeHeader/HomeHeader';
import HomeSecondServices from './../Main/HomeSecondServices/HomeSecondServices';
import HomeCaseArea from './../Main/HomeCaseArea/HomeCaseArea';

const Services = () => {
   return (
      <>
         <PageHelmet pageTitle="Services Page" />
         <HomeHeader/>
         <CommonPageHeader title="Services" subtitle="Services" />
         <HomeServices />
         <HomeCapabilities/>
         <HomeCaseArea/>
         <HomeSecondServices />
         <CommonCtaArea  data={{link2:'/faq', text2:'FAQ', link1:'', text1:''}}/>         
         <HomeFooter/>
      </>
   );
};

export default Services;