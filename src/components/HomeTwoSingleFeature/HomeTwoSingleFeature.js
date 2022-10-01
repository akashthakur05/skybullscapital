import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoSingleFeature = ({icon,title, description="", url=""}) => {
   return (
      <>
         <div className="features__item features__item-2 white-bg fix mb-30">
            <div className="features__thumb-2"></div>
            <div className="features__content-2">
               <div className="features__icon features__icon-2">
                  <i > {icon} </i>
               </div>
               <h3>{title}</h3>
               {description && <p>{description}</p> }  
               <div className="features__btn-2">
                  <Link to={url|| '/about'} className="link-btn">
                     <i > <CgArrowLongRight /> </i>
                     <i > <CgArrowLongRight /> </i>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleFeature;