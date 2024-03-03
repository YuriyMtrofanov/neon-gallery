import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import images from "../../assets/images/images.json";
import { FreeMode, Mousewheel, Parallax } from "swiper/modules";
// import { CenteredSlides } from "swiper/types/modules/swiper-options.d.ts.365";

const MainPage = () => {
    return (
        <div className="swiper slider slider-main">
            <Swiper
                className="swiper-wrapper slider__wrapper"
                modules={[FreeMode, Mousewheel, Parallax]}
                freeMode={true}
                mousewheel={true}
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
                parallax={true}
                // centeredSlides={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map(item => (
                    <SwiperSlide 
                        key={item.id}
                        className="swiper-slide slider__item"
                    >
                        <div
                            className="slider__img"
                            data-swiper-parallax="20%"
                            style={{backgroundImage: `url("${item.img}")`}}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainPage;
