import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCounterArea from '../Home/HomeCounterArea/HomeCounterArea';
import HomeTwoFeatures from '../HomeTwo/HomeTwoFeatures/HomeTwoFeatures';
import HomeTwoTestimonial from '../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial';
import HomeThreeFaq from './HomeThreeFaq/HomeThreeFaq';
import HomeThreeFooter from './HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeader from './HomeThreeHeader/HomeThreeHeader';
import HomeThreeHeroSection from './HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeSecondServices from './HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeServices from './HomeThreeServices/HomeThreeServices';

const HomeThree = () => {
   return (
      <>
         <PageHelmet pageTitle="Home | Sky Bulls Capital" />
         <HomeThreeHeader />
         <HomeThreeHeroSection />
         <HomeThreeServices />
         <HomeThreeSecondServices />
         <HomeTwoTestimonial />
         <HomeTwoFeatures/>
         {/* <HomeThreeProjects /> */}
         <HomeCounterArea/>
         <HomeThreeFaq />
         <CommonCtaArea  data={{link2:'', text2:'', link1:'', text1:''}}/>
         <HomeThreeFooter />
      </>
   );
};

export default HomeThree;