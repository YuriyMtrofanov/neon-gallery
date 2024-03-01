import React from "react";
import "../../assets/libs/swiper/swiper-bundle.min.js";
import Swiper from "../../assets/libs/swiper/swiper-bundle.min.js";

const MainPage = () => {
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
    return (
        <>
            <div className="swiper slide slider_main">
                <div className="swiper-wrapper slider__wrapper">
                    <div className="swiper-slide swiper__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel iusto pariatur similique aliquid eligendi itaque libero nulla, tenetur quis amet, repellendus at aut fuga atque molestias nam modi deserunt.</div>
                    <div className="swiper-slide swiper__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel iusto pariatur similique aliquid eligendi itaque libero nulla, tenetur quis amet, repellendus at aut fuga atque molestias nam modi deserunt.</div>
                    <div className="swiper-slide swiper__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel iusto pariatur similique aliquid eligendi itaque libero nulla, tenetur quis amet, repellendus at aut fuga atque molestias nam modi deserunt.</div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
