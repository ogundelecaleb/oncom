import React from "react";
import Navbar from "./component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SocialIcon } from "react-social-icons";

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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
        <h2 className="text-[20px] md:text-[34px] font-bold text-center text-[#3c4050] w-[80%] mx-auto">
          Everyday, we hear about tragic stories of a child, a father, a mother
          or a great leader lost to cancer.
        </h2>
      </section>
      <section className="py-[50px] bg-gray-100 px-3">
        <div className="flex flex-col md:flex-row  mt-[30px] md:mt-[60px] ">
          <div className="w-full md:w-[50%] h-full px-[16px] md:px-[22px] lg:px-[30px] py-[60px] bg-white">
            <h2 className="text-[#eb0733] text-[22px] md:text-[42px] lg:text-[56px] font-bold mb-[18px] md:mb-[24px] lg:mb-[30px]">
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
      <section className="px-[16px] py-[50px]">
        <p>How We Are Fighting Cancer</p>
        <p>
          We are building a world-class oncology and research center in Nigeria
          for Africa
        </p>
      </section>
    </div>
  );
};

export default Home;
