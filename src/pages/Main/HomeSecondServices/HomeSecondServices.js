import React from 'react';
import HomeThreeSecondSingleService from '../../../components/HomeSecondSingleService/HomeSecondSingleService';
import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';

const HomeSecondServices = () => {
   return (
      <>
         <section className="services__area-3 pt-115 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="section-title section__title-3 mb-70">
                        <h2>We Help <br/> Our Clients in holistic Growth</h2>
                        <p>We offer a wide range of services for our client and a dedicated team to back it.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                        <ul className="nav nav-pills " id="services-tab" role="tablist">
                           <li className="nav-item mb-45">
                              <a className="nav-link active" id="gst-tab" data-bs-toggle="pill" href="#gst" role="tab" aria-controls="share" aria-selected="true">
                                 <i> <SiKnowledgebase/> </i>Startup
                              </a>
                           </li>
                           <li className="nav-item mb-45">
                              <a className="nav-link" id="it-tab" data-bs-toggle="pill" href="#it" role="tab" aria-controls="it" aria-selected="false">
                                 <i> <SiKnowledgebase/> </i>Income Tax Return
                              </a>
                           </li>
                           <li className="nav-item mb-45">
                              <a className="nav-link " id="ipr-tab" data-bs-toggle="pill" href="#ipr" role="tab" aria-controls="ipr" aria-selected="false">
                                 <i> <SiKnowledgebase/> </i>INTELLECTUAL PROPERTY
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="compliance-tab" data-bs-toggle="pill" href="#compliance" role="tab" aria-controls="compliance" aria-selected="false">
                                 <i ><BsTools/></i> COMPLIANCE
                              </a>
                           </li>
                           <li className="nav-item mb-45">
                              <a className="nav-link " id="ac-tab" data-bs-toggle="pill" href="#ac" role="tab" aria-controls="ac" aria-selected="false">
                                 <i> <SiKnowledgebase/> </i>ANNUAL COMPLIANCE
                              </a>
                           </li>
                         
                          
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="startupRegistration-tab" data-bs-toggle="pill" href="#startupRegistration" role="tab" aria-controls="startupRegistration" aria-selected="false">
                                 <i ><BsHeart/></i> STARTUP REGISTRATIONS
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="specialEntity-tab" data-bs-toggle="pill" href="#specialEntity" role="tab" aria-controls="specialEntity" aria-selected="false">
                                 <i ><BsBag/></i> SPECIAL ENTITIES
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="services__tab grey-bg-18">
                        <div className="tab-content" id="services-content">
                           <div className="tab-pane fade show active" id="gst" role="tabpanel" aria-labelledby="gst-tab">
                              <HomeThreeSecondSingleService title="GST SERVICE" />
                           </div>
                           <div className="tab-pane fade" id="ipr" role="tabpanel" aria-labelledby="ipr-tab">
                              <HomeThreeSecondSingleService title="INTELLECTUAL PROPERTY" />
                           </div>
                           <div className="tab-pane fade" id="ac" role="tabpanel" aria-labelledby="ac-tab">
                              <HomeThreeSecondSingleService title="ANNUAL COMPLIANCE" />
                           </div>
                           <div className="tab-pane fade" id="it" role="tabpanel" aria-labelledby="it-tab">
                              <HomeThreeSecondSingleService title="Income Tax" />
                           </div>
                           <div className="tab-pane fade" id="compliance" role="tabpanel" aria-labelledby="compliance-tab">
                              <HomeThreeSecondSingleService title="Compliance" />
                           </div>
                           <div className="tab-pane fade" id="startupRegistration" role="tabpanel" aria-labelledby="startupRegistration-tab">
                              <HomeThreeSecondSingleService title="Startup Registration" />
                           </div>
                           <div className="tab-pane fade" id="specialEntity" role="tabpanel" aria-labelledby="specialEntity-tab">
                              <HomeThreeSecondSingleService title="Special Entity" />
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

export default HomeSecondServices;