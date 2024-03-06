import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import images from "../../assets/images/images.json";
import { FreeMode, Mousewheel, Parallax, Controller } from "swiper/modules";

const MainPage = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const initialData = images.map(item => {
        const changedItem = {
            ...item,
            opened: false // добавляю в каждый объект поле "opened" для работы с классом
        };
        return changedItem;
    });
    const [photos, setPhotos] = useState(initialData);

    const handleClick = (id) => {
        setPhotos(prevState => prevState.map(item => {
            return item.id === id
                ? {
                    ...item,
                    opened: !item.opened
                }
                : {
                    ...item,
                    opened: false
                };
        }));
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
                    {photos.map(item => (
                        <SwiperSlide
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`swiper-slide slider__item ${item.opened ? "opened" : ""}`}
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
