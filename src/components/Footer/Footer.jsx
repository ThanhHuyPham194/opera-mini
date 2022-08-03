import React from "react";
import "./Footer.scss";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import partner6 from "../../assets/images/partner6.png";
import partner7 from "../../assets/images/partner7.png";
import partner8 from "../../assets/images/partner8.png";
import partner1_1 from "../../assets/images/partner1-1.png";
import partner2_2 from "../../assets/images/partner2-2.png";
import partner3_3 from "../../assets/images/partner3-3.png";
import partner4_4 from "../../assets/images/partner4-4.png";
import partner5_5 from "../../assets/images/partner5-5.png";
import partner6_6 from "../../assets/images/partner6-6.png";
import partner7_7 from "../../assets/images/partner7-7.png";
import partner8_8 from "../../assets/images/partner8-8.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import TextStroke from "../TextStroke/TextStroke";
export default function Footer() {
  return (
    <div className="footer container">
      <div className="partner">
        <TextStroke stroke="Partner" />
        <div className="partner-list">
          <div className="partner-list-item">
            <img src={partner1} alt="" className="img-partner" />
            <img src={partner1_1} alt="" className="img-color" />

          </div>
          <div className="partner-list-item">
            <img src={partner2} alt="" className="img-partner" />
            <img src={partner2_2} alt="" className="img-color" />
          </div>
          <div className="partner-list-item">
            <img src={partner3} alt="" className="img-partner" />
            <img src={partner3_3} alt="" className="img-color" />
          </div>
          <div className="partner-list-item">
            <img src={partner4} alt="" className="img-partner" />
            <img src={partner4_4} alt="" className="img-color" />
          </div>
          <div className="partner-list-item">
            <img src={partner5} alt="" className="img-partner" />
            <img src={partner5_5} alt="" className="img-color" />
          </div>
          <div className="partner-list-item">
            <img src={partner6} alt="" className="img-partner" />
            <img src={partner6_6} alt="" className="img-color" />
          </div>
          <div className="partner-list-item">
            <img src={partner7} alt="" className="img-partner" />
            <img src={partner7_7} alt="" className="img-color" />
          </div>
          <div className="partner-list-item">
            <img src={partner8} alt="" className="img-partner" />
            <img src={partner8_8} alt="" className="img-color" />
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <img src={logo} alt="" />
        <div className="bottomFooter-link">
          <div className="bottomFooter-link-left">
            <Link to="/">Information </Link>
            <Link to="/">Email us</Link>
            <Link to="/">Contacts </Link>
          </div>
          <div className="bottomFooter-link-right">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Community </Link>
            <Link to="/">Cookies </Link>
          </div>
        </div>
        <div className="bottomFooter-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM17.6677 25.4077V16.7028H20.0706L20.3891 13.7031H17.6677L17.6718 12.2017C17.6718 11.4193 17.7461 11.0001 18.8698 11.0001H20.372V8H17.9688C15.0821 8 14.066 9.4552 14.066 11.9024V13.7034H12.2667V16.7031H14.066V25.4077H17.6677Z"
              fill="#F2F2F2"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 0C7.16347 0 0 7.16347 0 16C0 24.8365 7.16347 32 16 32C24.8365 32 32 24.8365 32 16C32 7.16347 24.8365 0 16 0ZM15.9759 17.3462L9.99913 13.0077V22.1533H9.0006C8.44427 22.1533 8.00207 21.7111 8.00207 21.1548V11.0413C8.00207 10.999 8.00467 10.9593 8.0096 10.9221C8.02773 10.7634 8.0856 10.6081 8.18753 10.4707C8.5156 10.0285 9.15753 9.92867 9.614 10.2567L15.9902 14.8927L22.4092 10.1997C22.8514 9.8716 23.4791 9.97147 23.8071 10.4279C23.9815 10.663 24.035 10.9504 23.9783 11.2174V21.1691C23.9783 21.7111 23.5361 22.1533 22.9798 22.1533H21.9813V12.9859L15.9759 17.3462Z"
              fill="#F2F2F2"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM24.1767 12.0488C23.9804 11.2948 23.4021 10.7011 22.6677 10.4996C21.3369 10.1333 16 10.1333 16 10.1333C16 10.1333 10.6631 10.1333 9.33217 10.4996C8.59782 10.7011 8.01949 11.2948 7.82322 12.0488C7.46667 13.4154 7.46667 16.2667 7.46667 16.2667C7.46667 16.2667 7.46667 19.1179 7.82322 20.4845C8.01949 21.2385 8.59782 21.8323 9.33217 22.0339C10.6631 22.4 16 22.4 16 22.4C16 22.4 21.3369 22.4 22.6677 22.0339C23.4021 21.8323 23.9804 21.2385 24.1767 20.4845C24.5333 19.1179 24.5333 16.2667 24.5333 16.2667C24.5333 16.2667 24.5333 13.4154 24.1767 12.0488Z"
              fill="#F2F2F2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3999 19.2V13.8667L18.6666 16.5335L14.3999 19.2Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
