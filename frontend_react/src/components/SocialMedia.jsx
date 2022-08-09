import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/joel-plotnik-881344164/">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/joelplotnik/?hl=en">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/joelplotnik?lang=en">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
