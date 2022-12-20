import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeHeader from './../Main/HomeHeader/HomeHeader';
import HomeFooter from './../Main/HomeFooter/HomeFooter';



const PageNotFound = () => {
   return (
      <>
         <PageHelmet pageTitle="404 - Page Not Found " />

         <HomeHeader/>
         <CommonPageHeader title="404 - Not Found" subtitle="404 - Not Found" />
         {/* <ContactInfoArea/> */}
         {/* <ContactArea/>0 */}
         <HomeFooter/>
      </>
   );
};

export default PageNotFound;