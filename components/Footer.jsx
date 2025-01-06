import React from "react";
import { FaGithub, FaLinkedin, FaRegHeart } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto">
        <div className="border-t border-accent">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ilkcanirturk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ilkcanirturk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:ilkcan.irturk@outlook.com"
                  className="text-white/60 hover:text-accent transition-colors"
                >
                  <MdMailOutline size={20} />
                </a>
              </div>

              {/* Signature */}
              <div className="flex items-center gap-2 text-sm text-white/60 hover:text-accent cursor-default">
                <span>Built with</span>
                <FaRegHeart size={16} className="text-red-500" />
                <span>by İlkcan</span>
              </div>

              {/* Copyright */}
              <div className="text-sm text-white/60 hover:text-accent cursor-default">
                © {currentYear} All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
