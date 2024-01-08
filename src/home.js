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
    </div>
  );
};

export default Home;
