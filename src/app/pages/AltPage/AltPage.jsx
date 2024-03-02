import React from "react";
import Swiper from "../../assets/libs/swiper/swiper-bundle.min.js";
import "../../assets/libs/swiper/swiper-bundle.min.css";

const AltPage = () => {
    const sliderMain = new Swiper(".slider_main", {
        freeMode: true, // позволяет листать слайды без привязки к конкретной позиции
        centerSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            680: {
                slidesPerView: 3.5,
                spaceBetween: 60
            }
        }
    });
    // console.log(sliderMain);

    return (
        <>
            <div className="swiper slider slider-main">
                <div className="swioer-wrapper slider__wrapper">
                    <div className="swioer-slide swiper__item">1</div>
                    <div className="swioer-slide swiper__item">2</div>
                    <div className="swioer-slide swiper__item">3</div>
                </div>
            </div>
        </>
    );
};

export default AltPage;
