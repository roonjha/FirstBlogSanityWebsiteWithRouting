import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Separator Line */}
      <hr className="border-t-2 border-gray-200 my-6" />
      
      {/* Footer */}
      <footer className="bg-gray-700 text-white py-2 mb-1">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Univerce Blogs. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="https://github.com/roonjha" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/suleman-roonjha-67bb1b109" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
