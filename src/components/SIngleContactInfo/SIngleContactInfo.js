import React from 'react';
import { Link } from 'react-router-dom';

const SingleContactInfo = ({image,title,btn_text, description="", url=""}) => {
   return (
      <>
         <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
            <div className="contact__help-item white-bg text-center mb-30 wow fadeInLeft" data-wow-delay=".3s">
               <div className="contact__icon icon__std mb-35">
                  <img src={`/assets/img/icon/contact/${image}.svg`} alt="" />
               </div>
               <div className="contact__text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to={url} className="z-btn z-btn-border">{btn_text}</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleContactInfo;