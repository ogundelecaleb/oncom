import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="pt-8 md:pt-[60px] px-[16px] md:px-[40px]">
      <div className="flex justify-between flex-wrap pb-10 border-b gap-4">
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
            <li>Project</li>
            <li>News</li>
            <li>Get Involved</li>
            <li>About </li>
            <li>Donate </li>
          </ul>
        </div>
        <div>
        <h3 className="text-[18px] md:text-[20px] font-semibold mb-2">About Us</h3>
        <ul className="flex flex-col gap-2">
            <li>Press Kit</li>
            <li>Event</li>
            <li>Volunteering</li>
            <li>FAQs</li>
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
