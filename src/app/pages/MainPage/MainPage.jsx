import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import images from "../../assets/images/images.json";
import { FreeMode, Mousewheel, Parallax, Controller } from "swiper/modules";
// import SwiperItem from "../../components/SliderItem";

const MainPage = () => {
    // const images = [
    //     {
    //         "img": "https://fonoteka.top/uploads/posts/2021-04/1618318453_55-phonoteka_org-p-neonovii-fon-dlya-fotoshopa-59.jpg",
    //         "title": "image",
    //         "id": "1"
    //     }
    // ];
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    let isOpened = false;
    const changeClassNames = () => {
        console.log(isOpened);
        return isOpened = !isOpened;
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
                            className="swiper-slide slider__item"
                            onClick={changeClassNames}
                            // onClick={()=>changeClassNames(item.id)}
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
