import React from "react";

const ContactArea = () => {
  return (
    <>
      <section className="contact__area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="contact__map">
                <iframe
                  title="contact"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611742.123546546!2d79.11862584406325!3d27.868446650561534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a7f984fa861bb%3A0x7afcd5f4ba77280b!2sSky%20Bulls%20Capital!5e0!3m2!1sen!2sin!4v1664531695411!5m2!1sen!2sin"
                ></iframe>
                <div
                  className="contact__wrapper d-md-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="contact__info mr-100">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p>
                          SkyBullsCapital,Sundarpur
                          <br /> Road,Dineshpur,Uttrakhand, 263160
                        </p>
                      </li>
                      <li>
                        <h4>call us</h4>
                        <p>
                          <a href="tel:+917023147701"> +91-7023147701</a>
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <p>
                          <a href="mailto:care@skybullscapital.com">
                            care@skybullscapital.com
                          </a>
                        </p>
                      </li>
                      <li>
                        <h4>WhatsApp</h4>
                        <p>
                          <a href="https://wa.me/918824294394?text=Hi%2C%20I%20need%20assitance">
                            Message
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="contact__form">
                    <form>
                      <input type="text" required placeholder="Your Name" />
                      <input type="email" required placeholder="Your Email" />
                      <input type="tel" required placeholder="Your Phone" />
                      <select name="service">
                        <option>Connect With Me</option>
                        <option>GST</option>
                        <option>ITR</option>
                        <option>Online Service</option>
                        <option>Business Enquiry</option>
                      </select>
                      <textarea required placeholder="Your Message"></textarea>
                      <button type="submit" className="z-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
