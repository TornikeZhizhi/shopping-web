import React from 'react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeSliderImg1 from "../../assets/imgs/happy-woman-with-dog.jpg";
import HomeSliderImg2 from "../../assets/imgs/happy-woman-with-smartphone.jpg";
import HomeSliderImg3 from "../../assets/imgs/banner.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from "./homeSlider.module.css";
import  "./homeSlider.css";


const HomeSlider = () => {
    return (
       
        <Swiper
        // install Swiper modules
            className={classes.home_slider}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide> 
            <img className={classes.home_slider_img} src={HomeSliderImg1}/>
        </SwiperSlide>
        <SwiperSlide>   
            <img className={classes.home_slider_img} src={HomeSliderImg2}/>
        </SwiperSlide>
        <SwiperSlide>   
            <img className={classes.home_slider_img} src={HomeSliderImg3}/>
        </SwiperSlide>
   

        </Swiper>
    );
};

export default HomeSlider;