import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="sectionBox pd-common bg1">
        <div className="container">
          <div className="contactForm">
            <h3>GET IN TOUCH</h3>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="message"
                    required
                    placeholder="Your Message (optional)"
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
