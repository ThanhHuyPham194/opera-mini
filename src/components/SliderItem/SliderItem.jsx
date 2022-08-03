import React from "react";
import "./SliderItem.scss";
export default function SliderItem({
  name,
  time,
  date,
  content,
  nextName,
  image,
}) {
  return (
    <>
      <div className="sliderItem">
        <img src={image} alt="" />
        <div className="sliderItem-info">
          <div className="sliderItem-info-dateTime">
            <span>{time}</span>
            <span>{date}</span>
          </div>
          <span className="sliderItem-info-name">{name}</span>
          <p className="sliderItem-info-content">{content}</p>
          <button className="sliderItem-info-button">
            <span>Buy Ticket</span>
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.35288e-05 9.00003L14.5861 9.00003L9.29306 14.293L10.7071 15.707L18.4141 8.00003L10.7071 0.293028L9.29306 1.70703L14.5861 7.00003L6.37037e-05 7.00003L6.35288e-05 9.00003Z"
                fill="#B4B4B4"
              />
            </svg>
          </button>
        </div>
        <div className="sliderItem-link">
          <a href="#">Facebook</a>
          <a href="#">Gmail</a>
          <a href="#">Youtube</a>
        </div>
        <div className="sliderItem-next">
          <span className="sliderItem-next-text">Next show</span>
          <span className="sliderItem-next-name">{nextName}</span>
        </div>
        <div className="sliderItem-icon nextEl">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nextEl"
          >
            <path
              d="M6.35288e-05 9.00003L14.5861 9.00003L9.29306 14.293L10.7071 15.707L18.4141 8.00003L10.7071 0.293028L9.29306 1.70703L14.5861 7.00003L6.37037e-05 7.00003L6.35288e-05 9.00003Z"
              fill="#B4B4B4"
              className="nextEl"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
