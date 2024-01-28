import React from "react";
import Navbar from "./component/Navbar";
import { SocialIcon } from "react-social-icons";
import Footer from "./component/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="relative h-[50vh] ">
        <img
          src="https://oncomhfoundation.org/wp-content/uploads/2022/07/2A5FB06D-5BD6-4353-8A51-FE75014A23B9.png-1.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full flex flex-col justify-center z-10 text-white py-[24px] bg-[#000435] opacity-80 px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-[22px] md:text-[40px] font-bold mb-5 w-full md:w-[50%]">
              Contact
            </h3>
            <h4 className="text-[20px] md:text-[32px] w-full md:w-[50%] ">
              Reach out to us for support, partnership or more about us.
            </h4>
          </div>
        </div>
      </section>
      <section className="py-[30px] md:py-[80px] px-[16px] md:px-[30px] bg-[#800b55] text-white text-center">
        <h2 className="text-[26px] md:text-[36px] lg:text-[42px] font-bold mb-2">
          Make Your Donation To
        </h2>
        <p className="text-[20px] md:text-[34px] lg:text-[24px] font-bold mb-2">
          Oncology Medical Facilities and Health Foundation
        </p>
        <p className="text-[20px] md:text-[24px] lg:text-[24px] font-bold mb-2">
          2041051764
        </p>
        <p className="text-[20px] md:text-[24px]  font-bold mb-2">First Bank</p>
      </section>
      <section className="py-[30px] md:py-[40px] px-[16px] md:px-[30px] bg-slate-50  flex flex-col md:flex-row gap-[30px] md:gap-[50px] xl:gap-[70px] items-center  ">
        <div className=" bg-white rounded-lg px-2 md:px-5 lg:px-6 py-[30px] w-full md:w-[50%]">
          <h3 className="m-3 md:mb-5 text-[24px] md:text-[28px] lg:text-[36px]">
            Send Us Message
          </h3>
          <form className="flex flex-col gap-2">
            <input
              placeholder="Name"
              type="text"
              className="py-3 px-2 focus:outline-[#800b55] bg-slate-50  border-red-400 mb-2"
            />
            <input
              placeholder="Email"
              type="email"
              className="py-3 px-2 focus:outline-[#800b55] bg-slate-50  border-red-400 mb-2"
            />
            <input
              placeholder="Subject"
              type="text"
              className="py-3 px-2 focus:outline-[#800b55] bg-slate-50  border-red-400 mb-2"
            />
            <textarea
              placeholder="Your thoughts"
              className="py-3 px-2 focus:outline-[#800b55] bg-slate-50 border-red-400 mb-2"
            />
          </form>

          <div className="flex flex-row gap-2 justify-center mt-4 mb-2">
            <SocialIcon
              url="https://facebook.com"
              bgColor=""
              fgColor="white"
              style={{ height: 28, width: 28 }}
            />
            <SocialIcon
              url="https://twitter.com"
              bgColor=""
              fgColor="white"
              style={{ height: 28, width: 28 }}
            />
            <SocialIcon
              url="https://pinterest.com"
              bgColor=""
              fgColor="white"
              style={{ height: 28, width: 28 }}
            />
          </div><p className="text-center">Follow us here</p>
        </div>
        <div className="w-full md:w-[50%] text-center md:text-left">
          <div className="mb-3 md:mb-6">
            <h4 className="text-red-500 text-[19px] md:text-[24px] mb-2">
              Visit Us
            </h4>
            <p>63, Ejirin Road Ijebu Ode Ogun State</p>
          </div>

          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=63%20Ejirin%20Road%20Ijebu%20Ode%20Ogun%20State&#038;t=m&#038;z=14&#038;output=embed&#038;iwloc=near"
            title="63 Ejirin Road Ijebu Ode Ogun State"
            aria-label="63 Ejirin Road Ijebu Ode Ogun State"
            className="mb-[20px] shadow mx-auto md:mx-0"
          ></iframe>
          <div className="mb-3 md:mb-6">
            <h4 className="text-red-500 text-[19px] md:text-[24px] mb-2">
              Email Us
            </h4>
            <p>info@oncomhfoundation.org</p>
          </div>
          <div className="mb-3 md:mb-6">
            <h4 className="text-red-500 text-[19px] md:text-[24px] mb-2">
              Give Us a Call
            </h4>
            <p>+2348039189369</p>
            <p>+2348034710027</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
