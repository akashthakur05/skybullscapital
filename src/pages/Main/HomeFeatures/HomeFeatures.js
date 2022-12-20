import React from 'react';
import { BiLock } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import HomeTwoSingleFeature from '../../../components/HomeSingleFeatureE/HomeSingleFeatureE';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="features__content-left">
                        <div className="section__title section__title-h2 mb-25">
                           <span>Startup Special</span>  <span className=' badge bg-danger text-white'>New</span>
                           <h2>Boost <br/> your Startup Growth</h2>
                        </div>
                        <p>We support the Startup India initiative that aims to accelerate entrepreneurship in the country and create startups.</p>
                        <Link to="/service-list/startup-registration" className="z-btn">What we do<i><CgArrowLongRight/></i></Link>
                     </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6">
                     <div className="features__content-right">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaLightbulb />} title="Registration" description='Eu elit veniam commodo officia amet incididunt reprehenderit.' />
                              <HomeTwoSingleFeature icon={<IoDocumentTextOutline />} title="Compliance" description='Est ipsum aute sunt culpa incididunt aliqua est qui.' />

                           </div>

                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaRibbon />} title="Digital Presence" description='Reprehenderit in velit fugiat occaecat aute sit non anim pariatur duis enim adipisicing dolore. ' />
                              <HomeTwoSingleFeature icon={<BiLock />} title="Filing" description='Veniam culpa in non enim excepteur ut commodo duis pariatur pariatur labore et ullamco.' />

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

export default HomeFeatures;