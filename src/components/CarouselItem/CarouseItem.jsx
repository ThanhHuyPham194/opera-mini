import React from 'react';
import arrow from '../../assets/svg/arrow.svg';
import './CarouselItem.scss';
export default function CarouselItem({ name, src, date }) {
    console.log(arrow);
    return (
        <div className='carousel-item'>
            <p className="carousel-item__name">
                {name}
            </p>
            <div className="carousel-item__img">
                <img src={src} alt="carousel" />
            </div>
            <div className="carousel-item__date">
                <div className="right">
                    <img src={arrow} alt="arrow" />
                </div>
                <p>{date}</p>
                <div className="left">
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
}


