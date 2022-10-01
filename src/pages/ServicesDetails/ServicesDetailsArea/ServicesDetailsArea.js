import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { generateKey } from "./../../../utils/randomKey";

const ServicesDetailsArea = ({ data }) => {
  let { categories, messageContext, content, description } = data;
  return (
    <>
      {data && (
        <section className="services__details pt-115 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                <div className="services__sidebar mr-50">
                  <div className="services__widget grey-bg-18 mb-40">
                    <div className="services__widget-title">
                      <h4>Categories</h4>
                    </div>
                    <div className="services__widget-content">
                      <div className="services__link">
                        <ul>
                          {categories.map((arr) => (
                            <li key={generateKey(arr.text)}>
                              <Link to={`/services/${arr.link}`}>
                                {arr.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="services__widget grey-bg-18 mb-40">
                    <div className="services__widget-title">
                      <h4>Talk To Advisor</h4>
                    </div>
                    <div className="services__widget-content">
                      <div className="services__form">
                        <form>
                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="Email" />
                          <input type="tel" placeholder="Phone" />
                          <input type="hidden" value={messageContext} name="context" />
                          <button className="z-btn z-btn-3 w-100">
                            Connect
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="services__widget grey-bg-18 mb-40">
                    <div className="services__widget-title">
                      <h4>Pricing Summary</h4>
                    </div>
                    <div className="services__widget-content"></div>
                  </div>
                  <div className="services__action grey-bg-18 mb-15">
                    <a href="#">
                      <i>
                        {" "}
                        <FiDownload />{" "}
                      </i>
                      Download broucre
                    </a>
                  </div>
                  <div className="services__action grey-bg-18 mb-15">
                    <a href="#">
                      <i>
                        {" "}
                        <FiDownload />{" "}
                      </i>
                      Document Checklist
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="services__text">
                  <h3>{content.title}</h3>
                  <p>{content.introduction}</p>
                </div>
                <div className="services__img mb-45 w-img">
                  <img
                    src="/assets/img/services/details/services-02.jpg"
                    alt=""
                  />
                </div>
                <div className="services__text">
                  <h3>{description.title}</h3>
                  <p>{description.introduction}</p>
                </div>
                <div className="services__list mb-40">
                  <ul>
                    {description.feature.map((arr) => (
                      <li key={generateKey(arr.text)}>{arr.text}</li>
                    ))}
                  </ul>
                </div>
                <button className="z-btn z-btn-3 w-100">Proceed</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServicesDetailsArea;
