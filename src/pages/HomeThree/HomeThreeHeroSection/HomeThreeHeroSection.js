import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeHeroSection = () => {
   return (
      <>
         <section className="hero__area p-relative">
            <div className="hero__shape">
               <img className="one" src="/assets/img/icon/slider/03/icon-1.png" alt="" />
               <img className="two" src="/assets/img/icon/slider/03/icon-2.png" alt="" />
               <img className="three" src="/assets/img/icon/slider/03/icon-3.png" alt="" />
               <img className="four" src="/assets/img/icon/slider/03/icon-4.png" alt="" />
               <img className="five" src="/assets/img/icon/slider/03/icon-6.png" alt="" />
               <img className="six" src="/assets/img/icon/slider/03/icon-7.png" alt="" />
            </div>
            <div className="hero__item hero__height d-flex align-items-center">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-5 order-last">
                        <div className="hero__thumb-wrapper ml-100 scene p-relative">
                           <div className="hero__thumb one">
                              <img className="h-100 w-100 layer" data-depth="0.2" src="/assets/img/slider/01/1.svg" alt="" />
                           </div>
                           <div className="hero__thumb two d-none d-md-block d-lg-none d-xl-block">
                              <img className="h-100 w-100 layer" data-depth="0.3" src="/assets/img/slider/01/2.svg" alt="" />
                           </div>
                           <div className="hero__thumb three d-none d-sm-block">
                              <img className="h-100 w-100 layer" data-depth="0.4" src="/assets/img/slider/01/3.svg" alt="" />
                           </div>
                           <div className="hero__thumb four d-none d-md-block d-lg-none d-xl-block">
                              <img className="h-100 w-100 layer" data-depth="0.5" src="/assets/img/slider/01/4.svg" alt="" />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                        <div className="hero__content">
                           <span>Welcome To SkyBullsCapital.</span>
                           <h1>Your Trusted Partner </h1>
                           <p>One Stop Business Solution for everything you need.</p>
                           <Link to="/service" className="z-btn z-btn-border">Explore</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeHeroSection;