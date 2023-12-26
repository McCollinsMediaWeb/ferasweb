import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // You can add further logic here if needed
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      <div className="sectionBox pd-common bg1">
        <div className="container">
          <div className="contactForm">
            <h3>GET IN TOUCH</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
