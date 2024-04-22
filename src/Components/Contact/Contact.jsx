import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="px-10">
      <div className="max-w-2xl mx-auto my-10">
        <h1 className="text-3xl font-semibold mb-5 text-center">Contact Us</h1>
        <p className="text-lg mb-5">
          Have a question or feedback? We'd love to hear from you! Get in touch
          with our team using the contact information below:
        </p>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Email</h2>
          <p className="text-lg">
            Send us an email at{" "}
            <a
              href="mailto:contact@memeviewer.com"
              className="text-blue-500 hover:underline"
            >
              contact@memeviewer.com
            </a>{" "}
            and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Phone</h2>
          <p className="text-lg">
            Give us a call at{" "}
            <a href="tel:+123456789" className="text-blue-500 hover:underline">
              +1 (234) 567-89
            </a>{" "}
            during our business hours: Monday to Friday, 9:00 AM - 5:00 PM.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Social Media</h2>
          <p className="text-lg">
            Follow us on social media for updates, memes, and more:
          </p>
          <ul className="mt-3">
            <li className="flex items-center space-x-3">
              <a
                href="https://facebook.com/memeviewer"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook 
              </a>
                <FaFacebook color="blue" />
            </li>
            <li className="flex items-center space-x-3">
              <a
                href="https://twitter.com/memeviewer"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter 
              </a>
                <FaTwitter color="lightblue" />
            </li>
            <li className="flex items-center space-x-3">
              <a
                href="https://instagram.com/memeviewer"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram 
              </a>
                <FaInstagram color="red" />
            </li>
          </ul>
        </div>
        <p className="mt-8 text-lg">We look forward to hearing from you!</p>
        <p className="mt-2 text-lg">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
