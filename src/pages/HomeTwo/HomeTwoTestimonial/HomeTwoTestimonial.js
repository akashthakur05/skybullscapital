import React from 'react';
import Slider from "react-slick";

const HomeTwoTestimonial = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: false,
      arrows: false,

   }
   const testimonialData = [
      {
         id:1,
         name:'Shitij Goel',
         title:'PRAYAGRAJ',
         data:"This website is extremely useful and beneficial for users who lack advanced knowledge in filing ITRs. The customer service representatives are excellent.I would recommend this site to anyone who is looking for the ITR file "
      },
      {
         id:2,
         name:'Nayan Agarwal',
         title:'PUNE',
         data:'Fast and low-priced service. I really recommend this site for GST registration.'
      },
   ]

   return (
      <>
         <section className="testimoinal__area gradient-bg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="testimonial__content pt-165 pb-175">
                        <div className="section__title section__title-3 mb-30">
                           <span className="white-color">Testimonials</span>
                           <h2 className="white-color">Featured Client Success Story</h2>
                        </div>

                        <Slider className='testimonial__slider pb-70' {...settings}>

                           {
                              testimonialData.map((testimonial,index) => {
                                 return <div key={index} className="testimonial__item">
                                    <p className="white-color">{testimonial.data}</p>
                                    <div className="testimonial__content d-flex align-items-center">
                                       <div className="quote mr-20">
                                          <img src="assets/img/icon/testimonial/quote.png" alt="quote" />
                                       </div>
                                       <div className="testimonial__info">
                                          <h4 className="white-color">{testimonial.name}</h4>
                                          <span className="white-color">{testimonial.title}</span>
                                       </div>
                                    </div>

                                 </div>
                              })
                           }

                        </Slider>

                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                     <div className="testimonial__thumb m-img text-end pt-120 " >
                        <img src="assets/img/testimonial/testimonial.svg" alt="Testimonial" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoTestimonial;