import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={99} suffix="%" title="Happy Clients" />
                     <SingleCount counter={225} title="AWESOME planing" />
                     <SingleCount counter={557} title="CLIENTS" />
                     <SingleCount counter={20} title="DAILY business" />

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;