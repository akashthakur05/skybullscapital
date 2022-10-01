import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <section className="about__area pb-200 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pr-0 col-lg-6">
              <div className="about__thumb m-img">
                <img src="/assets/img/about/about-2.svg" className="w-100 h-100" alt="" />
                <div className="about__shape">
                  <img src="/assets/img/about/red-shape.png" alt="" />
                </div>
              </div>
              <div className="about__list">
                  <ul>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Innovative ideas
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Professional assistance
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          {" "}
                          <FaCheck />{" "}
                        </i>
                        Financial advisory
                      </span>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="about__content">
                <div className="section__title mb-25">
                  <span>Who we are</span>
                  <h2>We Unlock Potential</h2>
                </div>
                <p>
                   We are a technology-driven platform, offering services
                  that cover the legal needs of startups and established
                  businesses. Some of our services include incorporation,
                  government registrations & filings, accounting, documentation
                  and annual compliances. In addition, we offer a wide range of
                  services to individuals, such as property agreements and tax
                  filings. Our mission is to provide one-click access to
                  individuals and businesses for all their legal and
                  professional needs..
                </p>

                <Link to="/services" className="z-btn ">
                  What we do
                  <i>
                    {" "}
                    <CgArrowLongRight />{" "}
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
