import React from "react";
import { SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/swiper-bundle.css";

const SliderItem = ({ id, url, title }) => {
    return (
        <>
            {/* <div className="swiper-slide slider__item"> */}
            <SwiperSlide className="swiper-slide slider__item">
                <div
                    className="slider__img"
                    data-swiper-parallax={id % 2 ? "20%" : "30%"}
                    style={{backgroundImage: `url("${url}")`}}
                    alt={title}
                ></div>
            </SwiperSlide>
            {/* </div> */}
        </>
    );
};

SliderItem.propTypes = {
    id: PropTypes.string, 
    url: PropTypes.string,
    title: PropTypes.string
};
 
export default SliderItem;