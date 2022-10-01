import React from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';


const OneService = ({ galleryItem, index, filterGalleryItems}) => {
   const { img,title,subtitle,slug } = galleryItem;
   const icon = ''
   return (
      <div className='col-xl-3 col-lg-3 col-md-6 grid-item'>
         <div className="features__item features__item-2 white-bg fix mb-30 ">
        <div className="features__thumb-2"></div>
        <div className="features__content-2">
          <div className="features__icon features__icon-2">
            <i> {icon} </i>
          </div>
          <Link to={`/services/${slug}`} className="link-btn"><h3>{title}</h3></Link>
          {subtitle && <p>{subtitle}</p>}
          <div className="features__btn-2">
            <Link to={`/services/${slug}`} className="link-btn">
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
            </Link>
          </div>
        </div>
      </div>
      </div>
   );
};

export default OneService;