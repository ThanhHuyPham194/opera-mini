import { gsap } from 'gsap';
import ScrollSmoother from 'gsap-trial/dist/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger';
import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import History from './History/History';
import './index.scss';
import News from './News/News';
import Slider from './Slider/Slider';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function Home() {
    useEffect(() => {
        // let smoother = ScrollSmoother.create({
        //     smooth: 2,
        //     effects: true,
        //     smoothTouch: 0.1
        // });
        let tl = gsap.timeline();
        let socials = document.querySelectorAll('.sliderItem-link a');
        let arrSub = document.querySelectorAll('.text-stroke__group .sub');
        let subs = gsap.utils.toArray(arrSub);
        tl.to('.overplay', 3, {
            scaleY: 0,
            ease: "power2.out"
        }).fromTo('.slider', 2, {
            opacity: 0,
            ease: "power2.out",
        }, {
            opacity: 1,
            ease: "power2.out"
        }, "-=3").to('.header', 1, {
            opacity: 1,
        }, "-=2.5").fromTo('.sliderItem-info', 1,
            {
                opacity: 0,
                x: -300,
            },
            {
                opacity: 1,
                x: 0
            }
            , "-=3"
        ).fromTo(".sliderItem-info-dateTime span", 1, {
            opacity: 0,
            x: -20,
            stagger: .3
        }, {
            opacity: 1,
            x: 0
        }, "-=2.3").fromTo('.sliderItem-info-name', 1, { x: 20, opacity: 0 }, { x: 0, opacity: 1 }, "-=2.2").fromTo('.sliderItem-info-content', 1, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=2.1").fromTo('.sliderItem-info-button', 1, { opacity: 0 }, { opacity: 1 }, "-=2.0").fromTo(socials, 1, { opacity: 0, y: -50, rotate: 180 }, { opacity: 1, y: 0, rotate: 0 }, "-=2.0").fromTo('.sliderItem-next', 1, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=2.0").fromTo('.sliderItem-icon', 1, { opacity: 0, y: -40 }, { opacity: 1, y: 0 }, "-=2.0");

        // Scroll Trigger
        subs.forEach(e => {
            gsap.to(e, {
                y: -80,
                x: 60,
                duration: 5,
                scrollTrigger: {
                    trigger: e,
                    scrub: .5,
                },
            });
        });
        document.querySelectorAll('.new-item__img').forEach(e => {
            gsap.to(e, {
                y: -320,
                duration: 5,
                scrollTrigger: {
                    trigger: e,
                    scrub: .5
                },
            });
        });
        let historyImgs = document.querySelectorAll('.history__img .img');
        gsap.timeline({ delay: 1 }).to(historyImgs[0], {
            opacity: 1,
            scrollTrigger: {
                trigger: '.history__img',
                scrub: 0.5,
            }
        }).to(historyImgs[1], {
            opacity: 1,
            scrollTrigger: {
                trigger: '.history__img',
                scrub: 1,
            }
        }).to(historyImgs[2], {
            opacity: 1,
            scrollTrigger: {
                trigger: '.history__img',
                scrub: 2,
            }
        });
    }, []);
    return (
        <div className='home' id="smooth-wrapper">
            <div className="overplay"></div>
            <div id="smooth-content">
                <Header />
                <Slider />
                <Carousel />
                <News />
                <About />
                <History />
                <Footer />
            </div>
        </div>
    );
};
