import React from "react";
import Navbar from "./component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "./component/Footer";

const Events = () => {
  return (
    <div>
      <Navbar />
      <section className="py-[40px] md:py-[60px] lg:py-[80px] px-[16px] sm:px-[20px] md:px-[40px] lg:px-[70px] text-center xl:px-[140px]">
        <h2 className="text-[24px] sm:text-[27px] md:text-[40px] lg:text-[50px]  mb-3 font-bold  ">
          Academic Staff Union of Secondary School Teachers
        </h2>
        <p className="tracking-wider mb-5 md:mb-10 leading-7">
          Today the 23rd of February, 2021,the Oncology Medical Facilities and
          Health Foundation, Ososa had a seminar with the Academic Staff Union
          of Secondary School Teachers (Ijebu-ode chapter) at Adeola Odutola
          College Ijebu-ode. 87 teachers were in attendance and the topic
          discussed was THE WOMAN, THE CANCER AND THE COST. Delivered by Mr Tola
          Omiwole. In attendance for the foundation was Mrs Abiola Adetoro
          <br />
          Mrs Adenusi and also our cancer survivor Mrs Jumoke Oyegbola who
          talked about her ordeal with breast cancer and how she’s coping with
          it as a Victor and not a victim.
          <br />
          The seminar started 11am and came to an end by 3.30pm.
        </p>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // effect={"fade"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper w-full md:w-[70%] mx-auto h-[200px]"
        >
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_104036-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_114003_resized_20220721_023617762-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_113958_resized_20220721_023618431-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20221013_132346-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20221013_130927-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG-20221020-WA0004-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG-20221020-WA0010-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[40px] md:py-[60px] lg:py-[80px] px-[16px] sm:px-[20px] md:px-[40px] lg:px-[70px] text-center xl:px-[140px]">
        <h2 className="text-[24px] sm:text-[27px] md:text-[40px] lg:text-[50px]  mb-3 font-bold  ">
          Ogbogbo Baptist Grammar School
        </h2>
        <p className="tracking-wider mb-5 md:mb-10 leading-7">
          On the 13th of October, 2022, the Oncology Medical Facilities and
          Health Foundation held a seminar at Ogbogbo Baptist Grammar School,
          Ogbogbo. Ijebu-ode. The topic of the seminar was: Cancer:A Knock From
          The Innermost Room. In attendance, were the senior secondary class 3,
          which were 71 in number and 2 teachers.
          <br />
          Our resource person was Mr Olutola Omiwole, from the foundation and
          other members present were: Mrs Abiola Adetoro, Ms Aisha Amuludun, Mr
          Akinloye and Mrs Yetunde Adenusi.
          <br />
          The seminar started 12.40pm and ended 2pm with lots of questions that
          were answered by our resource person.
        </p>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // effect={"fade"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper w-full md:w-[70%] mx-auto h-[200px]"
        >
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_104036-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_114003_resized_20220721_023617762-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_113958_resized_20220721_023618431-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20221013_132346-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20221013_130927-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG-20221020-WA0004-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG-20221020-WA0010-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[40px] md:py-[60px] lg:py-[80px] px-[16px] sm:px-[20px] md:px-[40px] lg:px-[70px] text-center xl:px-[140px]">
        <h2 className="text-[24px] sm:text-[27px] md:text-[40px] lg:text-[50px]  mb-3 font-bold  ">
          Tai Solarin University of Education Secondary School
        </h2>
        <p className="tracking-wider mb-5 md:mb-10 leading-7">
          On the 20th of October, 2022, we were at Tai Solarin University of
          Education Secondary School, Igbeba, Ijebu-Ode to speak with both
          teachers and students on cancer. We spoke to 715 students and 16
          teachers on the types, causes, prevention and treatment of cancer but
          breast cancer was the main topic. They were also taught self breast
          examination. Below are pictures of the awareness.
        </p>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // effect={"fade"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper w-full md:w-[70%] mx-auto h-[200px]"
        >
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_104036-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_114003_resized_20220721_023617762-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20210223_113958_resized_20220721_023618431-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20221013_132346-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG_20221013_130927-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG-20221020-WA0004-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/2022/11/IMG-20221020-WA0010-150x150.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
