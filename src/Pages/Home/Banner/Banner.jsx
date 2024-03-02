import React from "react";
import "./Banner.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner  bg-[#8876766e]">
      <Swiper
        spaceBetween={30}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" my-auto text-center ">
            <h3 className=" font-bold text-5xl  mt-40">
              Your Health Is <br /> Our Top prioety
            </h3>
            <div className=" mt-4">
              <button className=" bg-sky-500 me-2">Get Click</button>
              <button className=" bg-sky-500 gap-2">Get Click</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-auto text-center text-[#121213cc] ">
            <h3 className=" font-bold text-5xl  mt-40">
              Healthcare that is <br /> convenent and Afordable
            </h3>
            <div className=" mt-4">
              <button className=" bg-sky-500 me-2">Get Click</button>
              <button className=" bg-sky-500 gap-2">Get Click</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-auto text-center ">
            <h3 className=" font-bold text-5xl  mt-40">
              Decicated Hope <br /> Healing and Recovery
            </h3>
            <div className=" mt-4">
              <button className=" bg-sky-500 me-2">Get Click</button>
              <button className=" bg-sky-500 gap-2">Get Click</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
