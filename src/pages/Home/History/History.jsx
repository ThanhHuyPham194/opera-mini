import React from 'react';
import TextStroke from '../../../components/TextStroke/TextStroke';
import history1 from '../../../assets/images/history1.png';
import history2 from '../../../assets/images/history2.png';
import history3 from '../../../assets/images/history3.png';
import './History.scss';
import Tilt from 'react-vanilla-tilt';
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';
export default function History() {
    useEffect(() => {
        let imgs = document.querySelectorAll('.history__img .img');
        imgs.forEach(img => {
            VanillaTilt.init(img, {
                max: 15,
                speed: 400,
            });
        });

    }, []);
    return (
        <div className='history container'>
            <div className="history__wrapper">
                <TextStroke normal="History">Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.</TextStroke>
                <div className="history__img">
                    <div className="img">
                        <img src={history1} alt="" />
                    </div>
                    <div className="img">
                        <img src={history2} alt="" />
                    </div>
                    <div className="img">
                        <img src={history3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
