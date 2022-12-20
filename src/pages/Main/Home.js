import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCounterArea from '../Home/HomeCounterArea/HomeCounterArea';
import HomeFeatures from '../Main/HomeFeatures/HomeFeatures';
import HomeTestimonial from '../Main/HomeTestimonial/HomeTestimonial';
import HomeFaq from './HomeFaq/HomeFaq';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeSecondServices from './HomeSecondServices/HomeSecondServices';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
   return (
      <>
         <PageHelmet pageTitle="Home | Sky Bulls Capital" />
         <HomeHeader />
         <HomeHeroSection />
         <HomeServices />
         <HomeSecondServices />
         <HomeTestimonial />
         <HomeFeatures/>
         {/* <HomeProjects /> */}
         <HomeCounterArea/>
         <HomeFaq />
         <CommonCtaArea  data={{link2:'', text2:'', link1:'', text1:''}}/>
         <HomeFooter />
      </>
   );
};

export default Home;