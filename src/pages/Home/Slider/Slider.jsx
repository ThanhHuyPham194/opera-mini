import React from "react";
import SliderItem from "../../../components/SliderItem/SliderItem";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCreative } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/css/effect-creative";
import imageSlide1 from "../../../assets/images/slider1.png";
import imageSlide2 from "../../../assets/images/slider2.png";
import gsap from 'gsap-trial';
import ScrollSmoother from 'gsap-trial/dist/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger';
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
SwiperCore.use([Navigation]);

const data = [
  {
    name: "VIETNAMESE BAMBOO CIRCUS",
    content:
      "Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.",
    nextName: "VIETNAMESE TEH DAR",
    time: "20:00",
    date: "12/08/2022",
    image: imageSlide1,
  },
  {
    name: "VIETNAMESE TEH DAR",
    content:
      "Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.",
    nextName: "VIETNAMESE BAMBOO CIRCUS",
    time: "20:00",
    date: "12/08/2022",
    image: imageSlide2,
  },
];

export default function Slider() {
  useEffect(() => {
  }, []);
  return (
    <div className="slider">
      <Swiper
        modules={[EffectCreative]}
        effect="creative"
        slidesPerView={1}
        freeMode={"true"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}

        keyboard
        navigation={{ nextEl: '.nextEl' }}
        grabCursor={"true"}
        loop={"true"}

      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderItem
                name={item.name}
                content={item.content}
                nextName={item.nextName}
                time={item.time}
                date={item.date}
                image={item.image}
              ></SliderItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div >
  );
}
