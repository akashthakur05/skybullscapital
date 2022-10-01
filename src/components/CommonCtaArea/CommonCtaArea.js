import React from "react";
import { Link } from "react-router-dom";

const CommonCtaArea = ({data}) => {
  let { text1, text2, link1, link2 } = data;
  return (
    <>
      <section className="cta__area pt-180 pb-155">
        <div className="container p-relative">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="cta__content text-center">
                <span>
                  We provide a range of specialised services to assist you in
                  managing your business and legal compliances.
                </span>
                <h1>Still confused? Feel free to contact us</h1>
                <div className="cta__btn">
                  <Link
                    to={link2 || "/contact"}
                    className="z-btn z-btn-white mb-30"
                  >
                    {text1 || "Contact Us"}
                  </Link>
                  <Link
                    to={link1 || "/service"}
                    className="z-btn z-btn-transparent mb-30"
                  >
                    {text2 || "Service"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonCtaArea;
