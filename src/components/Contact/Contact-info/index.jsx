import React from "react";
import "./stlye.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                Have questions about 3D architecture, interior visualization, or design concepts? Let’s connect
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text"> +91 8929456565</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">  sy8929456565@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
