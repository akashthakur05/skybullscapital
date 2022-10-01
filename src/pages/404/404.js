import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';


const PageNotFound = () => {
   return (
      <>
         <PageHelmet pageTitle="404 - Page Not Found " />

         <HomeThreeHeader/>
         <CommonPageHeader title="404 - Not Found" subtitle="404 - Not Found" />
         {/* <ContactInfoArea/> */}
         {/* <ContactArea/>0 */}
         <HomeThreeFooter/>
      </>
   );
};

export default PageNotFound;