import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex max-lg:flex-col flex-row items-center md:justify-between max-lg:space-y-5">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-7" />
            <span className="font-bold text-white">Meme Viewer</span>
          </Link>

          <nav className="flex flex-wrap justify-center md:justify-end space-x-5 mb-4 md:mb-0">
            <FooterLink to="#" text="Privacy Policy" />
            <FooterLink to="#" text="Terms of Service" />
            <FooterLink to="#" text="Contact Us" />
            <FooterLink to="#" text="About Us" />
          </nav>

          <div className="flex justify-center max-lg:py-2 space-x-5">
            <SocialIcon icon={FaFacebook} />
            <SocialIcon icon={FaTwitter} />
            <SocialIcon icon={FaInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="font-medium text-white hover:text-gray-400 transition-colors"
    >
      {text}
    </Link>
  );
};

const SocialIcon = ({ icon: Icon }) => {
  return (
    <a
      href="#"
      className="p-1 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
    >
      <Icon size={25} />
    </a>
  );
};

export default Footer;
