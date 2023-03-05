import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/geetaApp.png";
import Ecommerce from "../../img/notetaking.png";
import HOC from "../../img/simon.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <h6>Bhagwad Geeta APP</h6>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h6> Note-taking APP</h6>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h6>Simon Game APP</h6>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h6> APP</h6>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
