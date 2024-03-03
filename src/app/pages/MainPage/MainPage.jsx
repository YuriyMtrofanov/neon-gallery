import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import images from "../../assets/images/images.json";
import { FreeMode, Mousewheel } from "swiper/modules";

const MainPage = () => {
    console.log(images);
    return (
        <div className="swiper slider slider-main">
            <Swiper
                className="swioer-wrapper slider__wrapper"
                modules={[FreeMode, Mousewheel]}
                freeMode={true}
                mousewheel
                breakpoints={{
                    0: {
                        slidesPerView: 2.5,
                        spaceBetween: 20
                    },
                    680: {
                        slidesPerView: 3.5,
                        spaceBetween: 60
                    }
                }}
                // spaceBetween={50}
                // slidesPerView={2.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map(item => (
                    <SwiperSlide 
                        key={item.id}
                        className="swioer-slide swiper__item"
                    >
                        {/* <img src={item.img} alt={item.title} /> */}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro laboriosam aspernatur corporis sapiente necessitatibus et ipsum nulla minus officia quo mollitia commodi perspiciatis quaerat, quam autem. Eaque molestias necessitatibus sequi.
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainPage;
