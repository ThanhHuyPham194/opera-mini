import React, { useRef, useState } from 'react';
import CarouselItem from '../../../components/CarouselItem/CarouseItem';
import carousel1 from '../../../assets/images/carousel1.png';
import carousel2 from '../../../assets/images/carousel2.png';
import carousel3 from '../../../assets/images/carousel3.png';
import carousel4 from '../../../assets/images/carousel4.png';
import carousel5 from '../../../assets/images/carousel5.png';
import carousel6 from '../../../assets/images/carousel6.jpg';
import carousel7 from '../../../assets/images/carousel7.jpg';
import carousel8 from '../../../assets/images/carousel8.jpg';
import TextStroke from '../../../components/TextStroke/TextStroke';
import './Carousel.scss';
import ButtonSeeAll from '../../../components/ButtonSeeAll/ButtonSeeAll';
import Flickity from 'react-flickity-component';
import { useEffect } from 'react';
export default function Carousel() {
    const flickityRef = useRef();
    const barSubRef = useRef();
    const barRef = useRef();
    const [isCheck, setIsCheck] = useState(false);
    const options = {
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        pageDots: false,
        prevNextButtons: false,
    };
    useEffect(() => {
        let flkty = flickityRef.current.flkty;
        flkty.on('scroll', (process) => {
            let percent = process * 100;
            if (percent < 0) percent = 0;
            barSubRef.current.style.width = percent + '%';
            if (barSubRef.current.offsetWidth === 0) {
                setIsCheck(true);
            } else {
                setIsCheck(false);
            }
        });
    }, []);
    return (
        <div className='carousel container'>
            <TextStroke stroke="SAIGON" extraStroke="OPERA SHOW">Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.</TextStroke>
            <div className="carousel__wrapper">
                <div className="button">
                    <ButtonSeeAll />
                </div>
                <Flickity className="carousel-flickity" options={options} ref={flickityRef}>
                    <CarouselItem src={carousel1} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel2} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel3} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel4} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel5} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel6} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel7} name="All Beethoven Concert" date="12/08/2022" />
                    <CarouselItem src={carousel8} name="All Beethoven Concert" date="12/08/2022" />
                </Flickity>
                <div className="bar">
                    <div className="bar__sub" ref={barSubRef}></div>
                    <div className={`bar__animation ${isCheck && 'active'}`}></div>
                </div>
            </div>

        </div>
    );
}
