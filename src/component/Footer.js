import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="pt-8 md:pt-[60px] px-[16px] md:px-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 border-b gap-8">
        <div className="flex flex-col">
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">Subscribe & Social</h3>
          <input
            className="py-2 rounded-lg border px-2 mb-2"
            type="text"
            placeholder="Email Address"
          />
          <button className="text-white rounded-[40px] bg-orange-500 py-2 px-3">
            submit
          </button>
          <div className="flex flex-row mt-4">
            <SocialIcon
              url="https://facebook.com"
              bgColor="transparent"
              fgColor="black"
              style={{ height: 28 }}
            />
            <SocialIcon
              url="https://twitter.com"
              bgColor="transparent"
              fgColor="black"
              style={{ height: 28 }}
            />
            <SocialIcon
              url="https://pinterest.com"
              bgColor="transparent"
              fgColor="black"
              style={{ height: 28 }}
            />
            <SocialIcon
              url="https://google.com"
              bgColor="transparent"
              fgColor="black"
              style={{ height: 28 }}
            />
            <SocialIcon
              url="https://linkedin.com"
              bgColor="transparent"
              fgColor="black"
              style={{ height: 28 }}
            />
          </div>
        </div>
        <div>
        <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
          <Link to="/event"><li className="hover:text-red-500">Project</li></Link>
            <li className="hover:text-red-500">News</li>
            <Link to="/support"> <li >Get Involved</li></Link>
            <Link to="/team">  <li className="hover:text-red-500">About </li></Link>
            <Link to="/donate"><li className="hover:text-red-500">Donate </li></Link>
            
          </ul>
        </div>
        <div>
        <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">About Us</h3>
        <ul className="flex flex-col gap-2">
            <li className="hover:text-red-500">Press Kit</li>
            <Link to="/event"> <li className="hover:text-red-500">Event</li></Link>
            <Link to="/donate"> <li className="hover:text-red-500">Volunteering</li></Link>
            <Link to="/support"><li className="hover:text-red-500">FAQs</li></Link>
          </ul>
        </div>
        <div>
        <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">Country</h3>
        <ul className="flex flex-col gap-2">
            <li>Nigeria</li>
            <li>United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="pt-3 pb-6 text-[12px]"><p>Copyright © {new Date().getFullYear()} Oncology Medical Facilities and Health Foundation</p></div>
    </div>
  );
};

export default Footer;
