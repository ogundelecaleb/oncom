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
        Isonyin Grammar school        </h2>
        <p className="tracking-wider mb-5 md:mb-10 leading-7">
        The foundation was at Isonyin Grammar school, Isonyin via Ijebu Ode, today 12th of October 2023 for a cancer awareness programme. We had 45 teachers in attendance. The topic was BONE TUMOR and our resource person was Dr Adekunle Adebanjo of Ola Olu specialist hospital.F
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
src="./asset/imgae1.jpg"              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
src="./asset/imgae2.jpg"                alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
src="./asset/imgae3.jpg"                alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
src="./asset/imgae4.jpg"                alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
src="./asset/imgae5.jpg"                alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
         
        </Swiper>
      </section>
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
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_113953_resized_20220721_023619088-scaled-pyalzka8msmydkd0ogpqm3f67djqr17kafm4c2xjmo.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_113949_resized_20220721_023619733-scaled-pyalz1hgu3x7xd4bq8l7885ybo4eh34xjukeqjpf34.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_113937_resized_20220721_023620395-scaled-pyalyiop1f7hh5vms0gnucwqfyp2752at9ip50hajk.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_115548_resized_20220721_023616993-scaled-pyam4ivkpbffnh5lplwurucr2l3hdiwkazkdinkqsg.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_115534_resized_20220721_023616287-scaled-pyam3fecq9xe3uqy44uiv4be4ei2e8ju5k5zd17a1s.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_114003_resized_20220721_023615525-scaled-pyam0sgnk0bfj8kuiht7da9u4hhzst2y4i9xw341i8.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_113958_resized_20220721_023618431-scaled-pyam040umbdz5dkch78wkgfuogug8odxd5bbew4a00.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20210223_104036-scaled-pyalt9r4vq0unji2f8snf6l31ika7z893ae3oe9fa8.jpg"
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
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_131043-pyaks9ttvhdjo38rgr2as0oxaix68vclo5z2nb4a74.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_131113-scaled-pyakup8tj2p7ntpsaaulpwmsjcyb4pzn06n8a1io4g.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_131118-scaled-pyakvn30d3zj9scmsph67o3dx8bittpz4u4pk04hwg.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_133426-pyal0nk0taul6x2hivhjiejvz7lzvpmftndxp4owps.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_131107-scaled-pyakspt33nzf5gljvfyygenre2qevq41ed2bt0gl9c.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_131123-scaled-pyakxlkwloo1gji8d1y6woayh4o1v4huej24jr7yxs.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_131123-scaled-pyakxlkwloo1gji8d1y6woayh4o1v4huej24jr7yxs.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_130927-scaled-pyakp43cwj1un9tywvwfwbe5ewhrdht2wj1bktsx40.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_132346-scaled-pyakyxioa8hnwnkll4o5xu7grs3rros5l4bw0v8w4g.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG_20221013_133422-pyal0kqi8sqq836kzc9nsx9i71zw8mb8t9fh9at38g.jpg"
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
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0003-pyal0pfp6yx5u4zr7wasne2t5zcqb3twhwownom4dc.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0006-pyal0t71yb2b4kualxxaxd4njiu75w8tufauksgjog.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0007-pyal0u4w553lg6sxggbxhuw44wpkdlck6jyc22f5i8.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0009-pyal0xw8wh8qqmnguhyfrtxyig718drhj2k9z69ktc.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0011-pyal11nlntdw12i08jky1szsvzoi366evl67wa404g.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0012-pyal12lfunf6cogn31zkmar9hdjvava57ptpdk2ly8.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0008-pyal0w0kit663eq75h56muf1bogaszk0ut9b0mcd5s.jpg"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0004-pyal0rbdkmzqhcx0wx41sdlqcr3gqi1d65zvm8jc0w.jpg"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0005-pyal0s97rh10syvnrfiocvd6y4yty753iand3ihxuo.jpg"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0013-pyal14h48bhqzwdws2straa6o5alq9hlvz4oc3ztls.jpg"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://oncomhfoundation.org/wp-content/uploads/elementor/thumbs/IMG-20221020-WA0010-pyal0zrxa5bbdukqjirowtgvp7xrnryy7bv8xq6sgw.jpg"
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
