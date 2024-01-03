import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { t: translate } = useTranslation("common");
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
            <h3>{translate("GETouch")}</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={translate("name")}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder={translate("phone")}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={translate("email")}
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
                    placeholder={translate("message")}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit">{translate("submit")}</button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
