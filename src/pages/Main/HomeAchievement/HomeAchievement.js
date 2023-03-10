import React from 'react';
import { Link } from 'react-router-dom';

const HomeAchievement = () => {
   return (
      <>
         <section className="achievement__area pt-135 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                     <div className="achievement__content">
                        <div className="section__title section__title-3 mb-20">
                           <span>Our Team</span>
                           <h2>We are certified experts best in their field</h2>
                        </div>
                        <p>Our team is comprised of industry experts who are passionate about their work, and have an extensive background in a wide variety of applications.</p>
                        <div className="achievement__wrapper d-flex d-md-block d-lg-flex justify-content-between mb-35 wow fadeInUp" data-wow-delay=".8s">
                           <div className="achievement__item  mb-30">
                              <img style={{height:'46px', width:'46px'}} src="/assets/img/icon/achievement/achievement-3.svg"alt="achievement"/>
                                 <h3>Acquisitions Finance Consulting</h3>
                           </div>
                           <div className="achievement__item  mb-30">
                              <img  style={{height:'46px', width:'46px'}} src="/assets/img/icon/achievement/achievement-2.svg" alt="achievement"/>
                                 <h3>Private Placement Consulting</h3>
                           </div>
                        </div>
                        <Link to="/services" className="z-btn">Explore</Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-6">
                     <div className="row">
                        <div className="col-xl-7 col-sm-6">
                           <div className="achievement__thumb m-img pl-30 text-right">
                              <img src="/assets/img/achievement/achievement-1.svg" alt="achievement-1"/>
                           </div>
                        </div>
                        <div className="col-xl-5 col-sm-6 d-md-none d-lg-none d-xl-block">
                           <div className="achievement__thumb w-img">
                              <img src="/assets/img/achievement/achievement-2.svg" alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAchievement;