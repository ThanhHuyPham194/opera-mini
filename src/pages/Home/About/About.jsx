import React from 'react';
import TextStroke from '../../../components/TextStroke/TextStroke';
import './About.scss';
import about from '../../../assets/images/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..
export default function About() {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <div className='about container'>
            <TextStroke stroke="about us">
                Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.
            </TextStroke>
            <div className="about__text">
                <div></div>
                <TextStroke normal="Architecture" position="right">
                    Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.
                </TextStroke>
            </div>
            <div className="about__img" data-aos="fade-out" data-aos-duration="1000">
                <div className="img">
                    <img src={about} alt="about_image" />
                </div>
            </div>

        </div>
    );
}
