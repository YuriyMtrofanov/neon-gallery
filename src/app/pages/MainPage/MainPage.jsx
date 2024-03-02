import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import images from "../../assets/images/images.json";

const MainPage = () => {
    console.log(images);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map(item => (
                <SwiperSlide key={item.id}>
                    <img src={item.img} alt={item.title} />
                </SwiperSlide>
            ))}
            {/* <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis consectetur hic, quis eum dignissimos esse temporibus consequatur ut aspernatur architecto officia a! Suscipit commodi, eum ullam dolorum odit quis!</SwiperSlide>
            <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis consectetur hic, quis eum dignissimos esse temporibus consequatur ut aspernatur architecto officia a! Suscipit commodi, eum ullam dolorum odit quis!</SwiperSlide>
            <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis consectetur hic, quis eum dignissimos esse temporibus consequatur ut aspernatur architecto officia a! Suscipit commodi, eum ullam dolorum odit quis!</SwiperSlide> */}
        </Swiper>
    );
};

export default MainPage;
