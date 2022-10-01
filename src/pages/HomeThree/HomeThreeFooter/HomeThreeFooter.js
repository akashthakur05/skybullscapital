/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeThreeFooter = () => {
  return (
    <>
      <footer>
        <div className="footer__area grey-bg pt-100">
          <div className="footer__top pb-45">
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 pr-0">
                  <div
                    className="footer__widget mb-45 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footer__widget-title mb-30">
                      <div className="logo">
                        <a href="#">
                          <img src="/assets/img/logo/logo-black.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <p>
                        {" "}
                        Our mission is to provide one-click access to
                        individuals and businesses for all their legal and
                        professional needs.
                      </p>
                      <div className="footer__img ">
                        <img
                          src="/assets/img/footer/footer-img-1.svg"
                          alt="SKy Bull Capitals"
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                  <div
                    className="footer__widget footer__widget-3 mb-45 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="footer__widget-title">
                      <h4>GST and ITR</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
                            <a href="#">GST Filing</a>
                          </li>
                          <li>
                            <a href="#">GST Registration</a>
                          </li>
                          <li>
                            <a href="#">ITR Filing</a>
                          </li>
                          <li>
                            <a href="#">Document Required</a>
                          </li>
                          <li>
                            <a href="#">Audit Compliance</a>
                          </li>
                          <li>
                            <a href="#">Section 80D Deduction</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                  <div
                    className="footer__widget footer__widget-3 mb-45 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="footer__widget-title">
                      <h4>Business Solution</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
                            <a href="#">Company Registration</a>
                          </li>
                          <li>
                            <a href="#">Trademark Registration</a>
                          </li>
                          <li>
                            <a href="#">e-CA Assistance</a>
                          </li>
                          <li>
                            <a href="#">Payment Gateway Setup</a>
                          </li>
                          <li>
                            <a href="#">Website Design</a>
                          </li>
                          <li>
                            <a href="#">Section 80D Deduction</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                  <div
                    className="footer__widget mb-45 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footer__widget-title">
                      <h4>Money</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          <li>
                            <a href="#">Mutual Stocks</a>
                          </li>
                          <li>
                            <a href="#">Loan</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Bank Account</a>
                          </li>
                          <li>
                            <a href="#">Demat Account</a>
                          </li>
                          <li>
                            <a href="#">Mutual Fund</a>
                          </li>
                          <li>
                            <a href="#">International Money Transfer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3  col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="footer__widget footer__widget-3 mb-45  ml-70 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="footer__widget-title">
                      <h4>Information</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info mb-35">
                        <ul>
                          <li>
                            <div className="icon theme-color ">
                              <i>
                                {" "}
                                <FaEnvelope />{" "}
                              </i>
                            </div>
                            <div className="text theme-color ">
                              <span>
                                <a href="mailto:care@skybullscapital.com">
                                  care@skybullscapital.com
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="icon theme-color">
                              <i>
                                {" "}
                                <FaPhoneAlt />{" "}
                              </i>
                            </div>
                            <div className="text theme-color">
                              <span>
                                <a href="tel:+917023147701">+91-7023147701</a>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <div className="footer__widget-title mb-30 d-flex">
                      <div className="logo logo__medium">
                        <a href="#">
                          <img src="/assets/img/logo/logo-inverted.svg" className="w-100 h-100" alt="Logo Inverted" />
                        
                        </a>
                      </div>
                      <div className="logo logo__medium d-inline">
                        <a href="#">
                          <img src="/assets/img/logo/logo-1.png" className="w-100 h-100" alt="Logo Inverted" />
                        
                        </a>
                      </div>
                    </div>
                      </div>
                      <div className="footer__social theme-social">
                        <ul>
                          <li>
                            <a href="https://facebook.com/skybullscapital">
                              <i>
                                <FaFacebookF />
                              </i>
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/skybullscapital">
                              <i>
                                <FaTwitter />{" "}
                              </i>
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="https://instagram.com/skybullscapital">
                              <i>
                                <FaInstagram />{" "}
                              </i>
                              <i>
                                <FaInstagram />{" "}
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright-3">
            <div className="container">
              <div className="footer__copyright-inner">
                <div className="row align-items-center">
                  <div className="col-xl-12">
                    <div className="footer__copyright-text text-center">
                      <p>
                        Copyright © 2022 All Rights Reserved{" "}
                        <Link to="https://indepthcoder.com">Akash Singh</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeThreeFooter;
