import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section max-w-3xl mx-auto p-8">
      {/* Separator Line */}
      <hr className="border-t-2 border-gray-300 my-8" />

      <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>

      <div className="contact-info bg-blue-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        {/* Contact Info */}
        <div className="text-center mb-6">
          <p className="text-xl mb-2">Suleman Roonjha</p>
          <p className="text-lg mb-2">Enrolled in GIAIC Program (7 p.m to 10 p.m Friday Class)</p>
          <p className="text-lg mb-4">Email: sulemangul05@gmail.com</p>
        </div>
      </div>

      {/* Social Media Links in Light Red Box Below the Blue Box */}
      <div className="social-links p-4 rounded-lg flex space-x-6 justify-center items-center mt-8">
        <a
          href="https://www.linkedin.com/in/suleman-roonjha-67bb1b109/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/roonjha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-700"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
