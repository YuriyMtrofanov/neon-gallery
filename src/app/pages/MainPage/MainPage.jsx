import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import images from "../../assets/images/images.json";
import { FreeMode, Mousewheel, Parallax, Controller } from "swiper/modules";
// import SwiperItem from "../../components/SliderItem";

const MainPage = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const changeClassNames = (id) => {
        // return images.map((item) => item.id === id ? "opened" : null);
        console.log("slide id", id);
    };
    return (
        <>
            <div className="swiper slider slider-main">
                <Swiper
                    className="swiper-wrapper slider__wrapper"
                    modules={[FreeMode, Mousewheel, Parallax, Controller]}
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
                    centeredSlides={true}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                >
                    {images.map(item => (
                        <SwiperSlide 
                            key={item.id}
                            // className="swiper-slide slider__item"
                            className={`swiper-slide slider__item`}
                            onClick={()=>changeClassNames(item.id)}
                        >
                            <div
                                className="slider__img"
                                data-swiper-parallax={item.id % 2 ? "20%" : "30%"}
                                style={{backgroundImage: `url("${item.img}")`}}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="slider-background">
                <Swiper
                    className="swiper-wrapper slider__wrapper"
                    modules={[FreeMode, Mousewheel, Parallax, Controller]}
                    freeMode={true}
                    centeredSlides={true}
                    parallax={true}
                    slidesPerView={3.5}
                    spaceBetween={60}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                >
                    {images.map(item => (
                        <SwiperSlide 
                            key={item.id}
                            className="swiper-slide slider__item"
                        >
                            <div
                                className="slider__img"
                                data-swiper-parallax={item.id % 2 ? "20%" : "30%"}
                                style={{backgroundImage: `url("${item.img}")`}}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default MainPage;
