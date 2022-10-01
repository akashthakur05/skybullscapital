import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';
import HomeThreeFooter from './../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomePricing from './../Home/HomePricing/HomePricing';

const About = () => {
   return (
      <>
         <PageHelmet pageTitle="About SkyBullsCapital" />

         <HomeThreeHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         <HomeTwoFaq/>
         <HomeTwoAchievement/>
         <HomePricing/>
         {/* <HomeBrands/> */}
         <HomeThreeFooter/>
      </>
   );
};

export default About;