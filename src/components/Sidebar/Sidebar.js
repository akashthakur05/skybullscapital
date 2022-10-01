import React,{useState} from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Collapsible from "react-collapsible";
import { BiMap } from "react-icons/bi";
import {
  FaEnvelope,
  FaMapMarked,
  FaPhoneAlt,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";
import { myNavFunc } from './../../utils/mapOperner';
const Sidebar = ({ show, handleClose }) => {
   const navigate = useNavigate();
   const [search, setSearch] = useState('');
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            <div className="logo logo__small">
              <a href="index.html">
                <img
                  src="/assets/img/logo/logo-1.png"
                  className="h-100"
                  alt="logo"
                />
              </a>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <section>
              <div className="p-0">
                <div className="sidebar__tab">
                  <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="menu-tab"
                        data-bs-toggle="tab"
                        href="#menu"
                        role="tab"
                        aria-controls="menu"
                        aria-selected="true"
                      >
                        menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="info-tab"
                        data-bs-toggle="tab"
                        href="#info"
                        role="tab"
                        aria-controls="info"
                        aria-selected="false"
                      >
                        info
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__content">
                  <div className="tab-content" id="sidebar-tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="menu"
                      role="tabpanel"
                      aria-labelledby="menu-tab"
                    >
                      <div className="side_navBar">
                        <div className="about iconAdd">
                          <NavLink to="/">Home </NavLink>
                        </div>

                        <div className="about iconAdd">
                          <NavLink to="/about">About Us </NavLink>
                        </div>
                        <div className="about iconAdd">
                          <NavLink to="/about">Branch </NavLink>
                        </div>

                        <Collapsible
                          trigger={<NavLink to="/services">Services</NavLink>}
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            <li>
                              <NavLink to="/service/gst-registration">
                                Startup
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/service/gst-registration">
                                IPR
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/service/gst-registration">
                                GST
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/service/gst-registration">
                                ITR
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/service/gst-registration">
                                Compliance
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/service/gst-registration">
                                Tax Notice
                              </NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <div className="about iconAdd border-0">
                          <NavLink to="/contact">Contact Us </NavLink>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                    >
                      <div className="sidebar__info">
                        <div className="logo logo__small mb-40">
                          <a href="index.html">
                            <img
                              src="/assets/img/logo/logo-inverted.svg"
                              className="h-100"
                              alt="logo"
                            />
                          </a>
                        </div>
                        <p>
                          We are a technology-driven platform, offering services
                          that cover the legal needs of startups and established
                          businesses.
                        </p>
                        <a href="/contact" className="z-btn z-btn-white">
                          contact us
                        </a>
                        <div className="sidebar__search">
                         
                            <input onChange={(e)=>{setSearch(e.target.value)}} value={search} type="text" placeholder="Your Keywords.." />
                            
                            <button onClick={()=>{navigate(`/search?q=${search}`)}} type="submit">
                              <i>
                                {" "}
                                <FaSearch />{" "}
                              </i>
                            </button>
                       
                        </div>
                        <div className="sidebar__contact mt-30">
                          <ul>
                            <li>
                              <div className="icon">
                                <i>
                                  {" "}
                                  <BiMap />{" "}
                                </i>
                              </div>
                              <div className="text">
                                <span>
                                  SkyBullsCapital,Sundarpur
                                  Road,Dineshpur,Uttrakhand, 263160
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i>
                                  {" "}
                                  <FaEnvelope />{" "}
                                </i>
                              </div>
                              <div className="text ">
                                <span>
                                  <a href="mailto:care@skybullscapital.com">
                                    care@skybullscapital.com
                                  </a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i>
                                  <FaPhoneAlt />{" "}
                                </i>
                              </div>
                              <div className="text">
                                <span>
                                  <a href="tel:+917023147701">+91-7023147701</a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i>
                                  <FaWhatsapp />{" "}
                                </i>
                              </div>
                              <div className="text">
                                <span>
                                  <a href="https://wa.me/918824294394?text=Hi%2C%20I%20need%20assitance">
                                    +91-7023147701
                                  </a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i>
                                  <FaMapMarked />{" "}
                                </i>
                              </div>
                              <div className="text">
                                <span>
                                  <a onClick={myNavFunc}>
                                    Click Here for Navigation
                                  </a>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
