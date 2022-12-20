import React from 'react';
import SingleContactInfo from '../../../components/SingleContactInfo/SingleContactInfo';

const ContactInfoArea = () => {
   return (
      <>
         <section className="contact__help p-relative pt-115 pb-150">
            <div className="contact__shape">
               <img className="dot" src="/assets/img/icon/contact/dot.png" alt="" />
               <img className="shape" src="/assets/img/icon/contact/shape.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-1">
                     <div className="section__title section__title-3 mb-55">
                        <span >Contact</span>
                        <h2 >Help Center</h2>
                     </div>
                  </div>
               </div>
               <div className="row p-relative">

                  <SingleContactInfo image="chat" title="Live Chat" description='Need Urjent Esclation' btn_text="Live Chat"  link=""/>
                  <SingleContactInfo image="faq" title="Any Questions" btn_text="Visit FAQ" description='For any general query policy and help.'  url="/faq"/>

               </div>
            </div>
         </section>
      </>
   );
};

export default ContactInfoArea;