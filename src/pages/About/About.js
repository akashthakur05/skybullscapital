import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomePricing from './../Home/HomePricing/HomePricing';
import HomeFooter from './../Main/HomeFooter/HomeFooter';
import HomeHeader from '../Main/HomeHeader/HomeHeader';
import HomeAchievement from './../Main/HomeAchievement/HomeAchievement';
import HomeTwoFaq from '../Main/HomeTwoFaq/HomeTwoFaq';

const About = () => {
   return (
      <>
         <PageHelmet pageTitle="About SkyBullsCapital" />
         <HomeHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         <HomeTwoFaq/>
         <HomeAchievement/>
         <HomePricing/>
         {/* <HomeBrands/> */}
         <HomeFooter/>
      </>
   );
};

export default About;