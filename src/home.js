import React from "react";
import Navbar from "./component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { SocialIcon } from "react-social-icons";
import {
  IoIosCheckboxOutline,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import {
  FaNetworkWired,
  FaHeartbeat,
  FaChartLine,
  FaStethoscope,
} from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";
import { BiSolidBuildingHouse } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="h-[80vh]  md:h-[90vh] relative">
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-black z-30 opacity-70 ">
          <div className="relative h-full w-full  py-[150px]  lg:py-[70px]  px-[16px] md:px-[50px] lg:px-[100px]">
            <p className="text-white text-[42px] md:text-[48px] lg:text-[64px] font-bold w-[90%]  md:w-[60%] lg:w-[60%] z-30">
              Fight The Battle Of Cancer With Us In Africa
            </p>
            <button className="px-6 py-2 text-white bg-red-500 rounded-2xl">
              SUPPORT US
            </button>

            <div className="flex flex-row md:flex-col md:absolute   left-2 bottom-[70px] mt-4">
              <SocialIcon
                url="https://facebook.com"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 28 }}
              />
              <SocialIcon
                url="https://twitter.com"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 28 }}
              />
              <SocialIcon
                url="https://pinterest.com"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 28 }}
              />
              <SocialIcon
                url="https://google.com"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 28 }}
              />
              <SocialIcon
                url="https://linkedin.com"
                bgColor="transparent"
                fgColor="white"
                style={{ height: 28 }}
              />
            </div>
          </div>
        </div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <img
              src="./asset/heart.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./asset/cells.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./asset/blackDoctor.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./asset/heart.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./asset/happyChild.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[60px] md:py-[80px] gap-[30px] flex flex-col md:flex-row justify-between items-center bg-black ">
        <div className="flex justify-center items-center w-full md:w-[50%]">
          <img src="/asset/cancerRibbon.png" alt="Cancer" />
        </div>
        <div className=" w-full md:w-[50%] text-white">
          <h2 className="text-[46px] font-semibold mb-3">
            Cancer Is Killing Our Loved Ones!
          </h2>

          <ul className="flex flex-col gap-3">
            <li>
              <div className="flex justify-between itemscenter">
                <p className="">Cervical Cancer</p>
              </div>
              <div className="w-full h-3 rounded-lg bg-gray-500 relative">
                <div className="w-[90%] h-3 rounded-lg bg-[#ff3984] absolute left-0 top-0 bottom-0" />{" "}
                <p className="absolute -top-[25px] right-[10%]">90%</p>
              </div>
            </li>
            <li>
              <div className="flex justify-between itemscenter">
                <p>Breast Cancer</p>
              </div>
              <div className="w-full h-3 rounded-lg bg-gray-500 relative">
                <div className="w-[90%] h-3 rounded-lg bg-[#ff3984] absolute left-0 top-0 bottom-0" />{" "}
                <p className="absolute -top-[25px] right-[10%]">90%</p>
              </div>
            </li>
            <li>
              <div className="flex justify-between itemscenter">
                <p>Lung Cancer</p>
              </div>
              <div className="w-full h-3 rounded-lg bg-gray-500 relative">
                <div className="w-[75%] h-3 rounded-lg bg-[#CC24FC] absolute left-0 top-0 bottom-0" />{" "}
                <p className="absolute -top-[25px] right-[25%]">75%</p>
              </div>
            </li>
            <li>
              <div className="flex justify-between itemscenter">
                <p>Prostate Cancer</p>
              </div>
              <div className="w-full h-3 rounded-lg bg-gray-500 relative">
                <div className="w-[95%] h-3 rounded-lg bg-red-500 absolute left-0 top-0 bottom-0" />{" "}
                <p className="absolute -top-[25px] right-[5%]">95%</p>
              </div>
            </li>
            <li>
              <div className="flex justify-between itemscenter">
                <p>Lymphoma</p>
              </div>
              <div className="w-full h-3 rounded-lg bg-gray-500 relative">
                <div className="w-[85%] h-3 rounded-lg bg-[#4285f4] absolute left-0 top-0 bottom-0" />{" "}
                <p className="absolute -top-[25px] right-[15%]">85%</p>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </section>
      <section className="py-[50px] md:py-[70px] lg:py-[100px] px-[16px]">
        <h2 className="text-[20px] md:text-[34px] font-bold text-center text-[#3c4050] w-[90%] md:w-[80%] mx-auto">
          Everyday, we hear about tragic stories of a child, a father, a mother
          or a great leader lost to cancer.
        </h2>
      </section>
      <section className="py-[50px] bg-gray-100 px-3">
        <div className="flex flex-col md:flex-row  mt-[30px] md:mt-[60px] ">
          <div className="w-full md:w-[50%] h-full px-[16px] md:px-[22px] lg:px-[30px] py-[60px] bg-white">
            <h2 className="text-[#eb0733] text-[22px] md:text-[42px] font-bold mb-[18px] md:mb-[24px] lg:mb-[30px]">
              The Challenge
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#070707]">
              Cancer is a leading cause of death worldwide, accounting for 7.6
              million deaths (about 13% of all deaths) , and is projected to
              continue rising, with an estimate of 13.1 million deaths in 2030
              (Globocan 2020). In Nigeria, about 10,000 cancer deaths are
              recorded annually while 250,000 new cases are recorded yearly ( G
              lobocan 2020). The report of World Health Organization (WHO)
              reflects the alarming shortage of functional cancer control plans
              in sub Saharan countries despite the enormity of socioeconomic
              havocs it poses to the countries.
            </p>
          </div>
          <div className="w-full md:w-[50%] hidden md:block">
            <img
              src="./asset/bloodbag.jpg"
              alt=""
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-[16px] py-[50px] bg-[#000435]">
        <p className="text-[22px] md:text-[42px] lg:text-[50px] text-white font-bold text-center mb-[16px]">
          How We Are Fighting Cancer
        </p>
        <p className="text-[18px] md:text-[24px] lg:text-[27px] text-gray-400  text-center">
          We are building a world-class oncology and research center in Nigeria
          for Africa
        </p>

        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper max-w-[805px] rounded-lg h-full mt-[30px] md:mt-[60px]"
        >
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/3B94BBCC-28E4-43B2-9148-26142B2A7A00.png-ps1milvxmw76e3izer49izqmis9i4mo1aaz9o9or52.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/12C54768-F144-474A-A828-2DD7B6041E81.png-ps1mik09984lqvlppqb0e07pc0irp8gkm1oapprjhi.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/C6953836-E403-4033-9032-F94D54ACF52F.png-ps1mii4kvk213nog0phr90os58s19u93xsdbr5ubty.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[30px] md:py-[50px] px-[16px] md:px-[30px] bg-slate-100">
        <h2 className="text-[#eb0733] text-[22px] md:text-[42px]  font-bold mb-[18px] md:mb-[24px]">
          Our Goals
        </h2>
        <p className="text-[18px] mb-[16px]">
          The objectives of the project are to improve cancer control in the
          Nigeria and sub Saharan Africa, specifically:
        </p>

        <ul className="flex flex-col gap-3">
          <li className="flex gap-2 md:gap-3 items-center text-white px-2 py-2 md:py-3 bg-[#ff3000] rounded-md md:w-[80%] lg:w-[70%]">
            <div>
              <IoIosCheckboxOutline className="text-[24px]" />
            </div>
            <div>
              1. To reduce cancer incidence (number of new cases of cancer)
            </div>
          </li>
          <li className="flex gap-2 md:gap-3 items-center text-white px-2 py-2 md:py-3 bg-yellow-500 rounded-md md:w-[80%] lg:w-[70%]">
            <div>
              <IoIosCheckboxOutline className="text-[24px]" />
            </div>
            <div>2. To reduce mortality due to cancer</div>
          </li>
          <li className="flex gap-2 md:gap-3 items-center text-white px-2 py-2 md:py-3 bg-blue-500 rounded-md md:w-[80%] lg:w-[70%]">
            <div>
              <IoIosCheckboxOutline className="text-[24px]" />
            </div>
            <div>
              3. To improve access to cancer services for the Nigeria
              population, closer to their homes;
            </div>
          </li>
          <li className="flex gap-2 md:gap-3 items-center text-white px-2 py-2 md:py-3 bg-purple-500 rounded-md md:w-[80%] lg:w-[70%]">
            <div>
              <IoIosCheckboxOutline className="text-[24px]" />
            </div>
            <div>
              4. To improve the quality of life for patients in Nigeria and sub
              Saharan Africa who are living with cancer.
            </div>
          </li>
        </ul>
      </section>
      <section className="py-[30px] md:py-[50px] px-[16px] md:px-[30px] bg-slate-100">
        <h2 className="text-[#eb0733] text-[22px] md:text-[42px] font-bold mb-[18px] md:mb-[24px] text-center">
          Our Objectives
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <li className="flex flex-row md:flex-col md:items-center gap-3 bg-white rounded-lg p-2 md:py-5">
            <div>
              {" "}
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex justify-center items-center rounded-full border ">
                <IoMdCheckmarkCircleOutline className="text-red-500 text-[24px] md:text-[28px] " />
              </div>
            </div>
            <div className="md:text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                Diagnosis & Treatment
              </h3>
              <p>
                To build and manage a top ranged oncology and Medical
                Diagnostics and treatment facility
              </p>
            </div>
          </li>
          <li className="flex flex-row md:flex-col md:items-center gap-3 bg-white rounded-lg p-2 md:py-5">
            <div>
              {" "}
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex justify-center items-center rounded-full border ">
                <FaChartLine className="text-red-500 text-[24px] md:text-[28px] " />
              </div>
            </div>
            <div className="md:text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                Health Insurance
              </h3>
              <p>
                To institute a transparent health insurance system for cancer
                screening, diagnosis and treatment
              </p>
            </div>
          </li>
          <li className="flex flex-row md:flex-col md:items-center gap-3 bg-white rounded-lg p-2 md:py-5">
            <div>
              {" "}
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex justify-center items-center rounded-full border ">
                <FaHeartbeat className="text-red-500 text-[24px] md:text-[28px] " />
              </div>
            </div>
            <div className="md:text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                Research & Training
              </h3>
              <p>
                To undertake and collaborate on cancer research and facilitate
                the training of Oncology Medical Professionals
              </p>
            </div>
          </li>
          <li className="flex flex-row md:flex-col md:items-center gap-3 bg-white rounded-lg p-2 md:py-5">
            <div>
              {" "}
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex justify-center items-center rounded-full border ">
                <FaNetworkWired className="text-red-500 text-[24px] md:text-[28px] " />
              </div>
            </div>
            <div className="md:text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                Networking
              </h3>
              <p>To network with resourceful cancer centers across the world</p>
            </div>
          </li>

          <li className="flex flex-row md:flex-col md:items-center gap-3 bg-white rounded-lg p-2 md:py-5">
            <div>
              {" "}
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex justify-center items-center rounded-full border ">
                <BiSolidBuildingHouse className="text-red-500 text-[24px] md:text-[28px] " />
              </div>
            </div>
            <div className="md:text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                Enlightenment
              </h3>
              <p>To conduct enlightenment program for the societies</p>
            </div>
          </li>
          <li className="flex flex-row md:flex-col md:items-center gap-3 bg-white rounded-lg p-2">
            <div>
              {" "}
              <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex justify-center items-center rounded-full border ">
                <PiNotepadBold className="text-red-500 text-[24px] md:text-[28px] " />
              </div>
            </div>
            <div className="md:text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                Government Engagement
              </h3>
              <p>
                To engage the government on effective Health and Environmental
                Policies{" "}
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="py-[30px] md:py-[50px] px-[16px] md:px-[30px] bg-slate-100">
        <h2 className="text-[#eb0733] text-[22px] md:text-[42px] font-bold mb-[18px] md:mb-[24px]">
          We Are Making A difference
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <ul>
              <li className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:justify-between gap-4 ">
                <div>
                  <FaStethoscope className="text-purple-500 text-[24px] " />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                    Our Vision
                  </h3>
                  <p>
                    Our Vision is to establish a world class research-based
                    cancer hospital and fertility center, and institute a
                    sustainable support program to support Cancer and fertility
                    patient in Nigeria and in Africa at large.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:justify-between gap-4 bg-white rounded-lg">
                <div>
                  <FaHeartbeat className="text-purple-500 text-[24px] " />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#000033] mb-2 md:mb-3">
                    Our Mission
                  </h3>
                  <p>
                    To bring cure, joy, and possibilities to the rich and the
                    poor alike, who experience avoidable death as a result of
                    lack of good health facilities, well trained and disciplined
                    personnels, as well as conducive recuperating environment
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center w-full md:w-[40%] lg:w-[50%]">
            <img
              loading="lazy"
              src="https://oncomhfoundation.org/wp-content/uploads/2022/07/Oncologycentrehj-1024x1019.png"
              alt="doctor"
              className="max-h-[400px]"
            />
          </div>
        </div>
      </section>
      <section className="relative h-[50vh] ">
        <img
          src="https://oncomhfoundation.org/wp-content/uploads/2022/07/2A5FB06D-5BD6-4353-8A51-FE75014A23B9.png-1.jpg"
          loading="lazy"
          alt=""
          className="absolute top-0 left-0 right-0 h-full w-full object-cover -z-10"
        />
        <div className="h-full w-full text-center flex flex-col justify-center z-10 text-white py-[24px] bg-[#000435] opacity-80">
          <h3 className="text-[20px] md:text-[40px] font-bold mb-5">
            The Project
          </h3>
          <p className="w-[90%] md:w-[70%] mx-auto text-[18px] md:text-[20px]">
            This project is not a profit making initiative. It is to bring joy,
            cure and possibilities to the rich and the poor alike, who are
            experiencing avoidable deaths as a result of lack of good health
            facilities, (to enhance the training of) well trained and
            disciplined personnel, (and to provide) conducive recuperating
            environments.
          </p>
        </div>
      </section>
      <section className="py-[30px] md:py-[50px] px-[16px] md:px-[30px] bg-slate-100">
        <div className="flex justify-center items-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <li className="bg-white rounded-lg max-w-[340px]">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded-tl-lg rounded-tr-lg h-[140px] w-full object-cover "
                  src="https://oncomhfoundation.org/wp-content/uploads/2022/07/mri-g9bbf54628_1280.jpg"
                  alt=""
                />
              </div>

              <div className="py-4 text-center px-2">
                <p>A Clinical Diagnostic and Oncology Centre</p>
              </div>
            </li>
            <li className="bg-white rounded-lg max-w-[340px]">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded-tl-lg rounded-tr-lg h-[140px] w-full object-cover "
                  src="https://oncomhfoundation.org/wp-content/uploads/2022/07/C7118D40-BAAC-4B51-B023-2002189FBF21.pnggf_.jpg"
                />
              </div>

              <div className="py-4 text-center px-2">
                <p>A Standard ICU (Intensive Care Unit)</p>
              </div>
            </li>
            <li className="bg-white rounded-lg max-w-[340px]">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded-tl-lg rounded-tr-lg h-[140px] w-full object-cover "
                  src="https://oncomhfoundation.org/wp-content/uploads/2022/07/2A5FB06D-5BD6-4353-8A51-FE75014A23B9.png-1.jpg"
                />
              </div>

              <div className="py-4 text-center px-2">
                <p>A Standard Operating Theater for Special Surgeries</p>
              </div>
            </li>
            <li className="bg-white rounded-lg max-w-[340px]">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded-tl-lg rounded-tr-lg h-[140px] w-full object-cover "
                  src="https://oncomhfoundation.org/wp-content/uploads/2022/07/9B65F09B-0133-48BD-BE64-C0516B1577A3.png.jpg"
                />
              </div>

              <div className="py-4 text-center px-2">
                <p>A Recuperation Ward</p>
              </div>
            </li>
            <li className="bg-white rounded-lg max-w-[340px]">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded-tl-lg rounded-tr-lg h-[140px] w-full object-cover "
                  src="https://oncomhfoundation.org/wp-content/uploads/2022/07/3A9E7F1C-113B-4882-ADDA-44A0C5EED808.png.jpg"
                  alt=""
                />
              </div>

              <div className="py-4 text-center px-2">
                <p>A Fertility Clinic</p>
              </div>
            </li>
            <li className="bg-white rounded-lg max-w-[340px]">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="rounded-tl-lg rounded-tr-lg h-[140px] w-full object-cover "
src="https://oncomhfoundation.org/wp-content/uploads/2022/07/3D20AD18-6D5E-46AA-BB72-B71957E0501E.png-1.jpg"                  alt=""
                />
              </div>

              <div className="py-4 text-center px-2">
                <p>Research & Development Centre</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
