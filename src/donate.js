import React from "react";
import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";
import Footer from "./component/Footer";

const Donate = () => {
  return (
    <div>
      <Navbar />
      <section
        className="bg-[url(https://oncomhfoundation.org/wp-content/uploads/2022/07/3D20AD18-6D5E-46AA-BB72-B71957E0501E.png-1.jpg)] 
bg-no-repeat h-[50vh] md:h-[70vh] bg-cover bg-fixed"
      >
        <div className="bg-black opacity-70 w-full h-full py-[80px] md:py-[80px] text-white px-4 md:px-[30px] lg:px-[60px]">
          <h2 className="text-[42px] md:text-[48px] lg:text-[62px] font-bold w-full md:w-[70%] lg:w-[60%]">
            Together We Can Fight Cancer In Africa
          </h2>
        </div>
      </section>
      <section className="py-[36px] md:py-[42px] lg:py-[70px] px-4 bg-slate-50">
        <h2 className="text-[24px] md:text-[42px] lg:text-[50px] font-bold text-center mb-[36px] md:mb-[48px]">
          Your Donation Can Change Lives
        </h2>
        <div className="flex justify-center flex-wrap gap-[30px]">
          <div className="bg-white rounded-lg text-center shadow py-[40px] px-4 max-w-[350px]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/07/about-2-icon1.png"
              alt="icon"
              className="h-[40px] md:h-[60px] mx-auto"
            />
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
              Monetary
            </h3>
            <p className="text-[16px] md:text-[18px] mb-3">
              You can donate money. Any amount of donated will go a long way.
            </p>
            <Link className="cursor-pointer" to="/contact">
              <p className="text-orange-500 font-semibold hover:-translate-y-1 ease-in-out duration-300">
                DONATE NOW
              </p>
            </Link>
          </div>
          <div className="bg-white rounded-lg text-center shadow py-[40px] px-4 max-w-[350px]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/07/about-2-icon2.png"
              alt="icon"
              className="h-[40px] md:h-[60px] mx-auto"
            />
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
              Volunteer
            </h3>
            <p className="text-[16px] md:text-[18px] mb-3">
              You can volunteer your time or expertise to make a difference.{" "}
            </p>

            <Link className="cursor-pointer" to="/contact">
              <p className="text-orange-500 font-semibold hover:-translate-y-1 ease-in-out duration-300">
                GET STARTED
              </p>
            </Link>
          </div>
          <div className="bg-white rounded-lg text-center shadow py-[40px] px-4 max-w-[350px]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/07/about-2-icon3.png"
              alt="icon"
              className="h-[40px] md:h-[60px] mx-auto"
            />
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-2">
              Sponsorships
            </h3>
            <p className="text-[16px] md:text-[18px] mb-3">
              You can sponsor a project, a cancer patient healthcare, a research
              or a campaign.
            </p>
            <Link className="cursor-pointer" to="/contact">
              <p className="text-orange-500 font-semibold hover:-translate-y-1 ease-in-out duration-300">
                DONATE NOW
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-[36px] md:py-[42px] lg:py-[70px] px-4 md:px-[40px] lg:px-[70px] bg-slate-50">
        <div className="flex flex-col gap-7 md:gap-[48px]">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="p-5  hmd:py-7 rounded-xl  md:rounded-tr-none md:rounded-br-none bg-white w-full md:w-[50%] ">
            <h3 className="text-[#331c16] text-[20px] md:text-[24px] lg:text-[28px] mb-4 font-bold">
              Donation for the construction of the hospital
            </h3>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-medium mb-3">
              Goal: N5,000,000,000
            </p>
            <div className="w-full h-3 rounded-lg bg-gray-500 relative mb-7">
              <div className="w-[20%] h-3 rounded-lg bg-[#ff3984] absolute left-0 top-0 bottom-0" />{" "}
            </div>
            <button className="px-[28px] py-4 rounded-lg font-semibold bg-orange-500 hover:bg-orange-400 ">
              Donate
            </button>
          </div>
          <div className="  rounded-tr-xl rounded-br-xl w-full md:w-[50%]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/3B94BBCC-28E4-43B2-9148-26142B2A7A00.png-ps1milvxmw76e3izer49izqmis9i4mo1aaz9o9or52.jpg"
              className="md:h-full rounded-xl   md:rounded-tl-none md:rounded-bl-none"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="   w-full md:w-[50%]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/3B94BBCC-28E4-43B2-9148-26142B2A7A00.png-ps1milvxmw76e3izer49izqmis9i4mo1aaz9o9or52.jpg"
              className="md:h-full  rounded-xl  md:rounded-tr-none md:rounded-br-none"
            />
          </div>
          <div className="p-5  hmd:py-7    rounded-xl   md:rounded-tl-none md:rounded-bl-none bg-white w-full md:w-[50%] ">
            <h3 className="text-[#331c16] text-[20px] md:text-[24px] lg:text-[28px] mb-4 font-bold">
              Donation for the equipment and tools needed in the hospital.
            </h3>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-medium mb-3">
              Goal: N7,000,000,000
            </p>
            <div className="w-full h-3 rounded-lg bg-gray-500 relative mb-7">
              <div className="w-[20%] h-3 rounded-lg bg-[#ff3984] absolute left-0 top-0 bottom-0" />{" "}
            </div>
            <button className="px-[28px] py-4 rounded-lg font-semibold bg-orange-500 hover:bg-orange-400 ">
              Donate
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <div className="p-5  hmd:py-7 rounded-xl  md:rounded-tr-none md:rounded-br-none bg-white w-full md:w-[50%] ">
            <h3 className="text-[#331c16] text-[20px] md:text-[24px] lg:text-[28px] mb-4 font-bold">
            Donation for the running of the hospital and research centre for the next 5 years
            </h3>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-medium mb-3">
              Goal: N3,500,000,000
            </p>
            <div className="w-full h-3 rounded-lg bg-gray-500 relative mb-7">
              <div className="w-[10%] h-3 rounded-lg bg-[#ff3984] absolute left-0 top-0 bottom-0" />{" "}
            </div>
            <button className="px-[28px] py-4 rounded-lg font-semibold bg-orange-500 hover:bg-orange-400 ">
              Donate
            </button>
          </div>
          <div className="  rounded-tr-xl rounded-br-xl w-full md:w-[50%]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/3B94BBCC-28E4-43B2-9148-26142B2A7A00.png-ps1milvxmw76e3izer49izqmis9i4mo1aaz9o9or52.jpg"
              className="md:h-full rounded-xl   md:rounded-tl-none md:rounded-bl-none"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="   w-full md:w-[50%]">
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/3B94BBCC-28E4-43B2-9148-26142B2A7A00.png-ps1milvxmw76e3izer49izqmis9i4mo1aaz9o9or52.jpg"
              className="md:h-full  rounded-xl  md:rounded-tr-none md:rounded-br-none"
            />
          </div>
          <div className="p-5  hmd:py-7    rounded-xl   md:rounded-tl-none md:rounded-bl-none bg-white w-full md:w-[50%] ">
            <h3 className="text-[#331c16] text-[20px] md:text-[24px] lg:text-[28px] mb-4 font-bold">
            Donation for research and campaign            </h3>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-medium mb-3">
              Goal: N1,500,000,000
            </p>
            <div className="w-full h-3 rounded-lg bg-gray-500 relative mb-7">
              <div className="w-[10%] h-3 rounded-lg bg-[#ff3984] absolute left-0 top-0 bottom-0" />{" "}
            </div>
            <button className="px-[28px] py-4 rounded-lg font-semibold bg-orange-500 hover:bg-orange-400 ">
              Donate
            </button>
          </div>
        </div>
        </div>
      </section>
      <section className="relative h-[70vh] ">
        <img
          src="https://oncomhfoundation.org/wp-content/uploads/2022/07/2A5FB06D-5BD6-4353-8A51-FE75014A23B9.png-1.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full text-center flex flex-col justify-center z-10 text-white py-[24px] bg-[#000435] opacity-80">
          <h3 className="text-[20px] md:text-[40px] font-bold mb-5">
          Donate Your Time.
Become a Volunteer
          </h3>
          <p className="w-[90%] md:w-[70%] mx-auto text-[18px] md:text-[20px] mb-7">
          Together We Can Change The World!
          </p>
          <button className="px-[28px] py-4 mx-auto rounded-lg font-semibold bg-orange-500 hover:bg-orange-400 ">
              Join Today
            </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Donate;
