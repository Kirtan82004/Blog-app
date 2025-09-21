import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import logo from "../../assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-900 border-t border-gray-700 text-gray-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap -m-6">
          {/* Logo & Brand */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center gap-3">
                    <img
                              src={logo}
                              alt="Logo"
                              className="h-12 w-12 rounded-full shadow-md border-2 border-indigo-500 hover:scale-110 hover:shadow-lg transition-transform duration-300"
                            />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  MyBlog
                </span>
              </div>
              <p className="text-sm text-gray-400 max-w-sm">
                Discover the latest articles, insights, and updates. Learn, share and grow with us.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="mt-6 text-xs text-gray-500">
                &copy; {new Date().getFullYear()} MyBlog. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-gray-400">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-gray-400">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-gray-400">
              Legals
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
