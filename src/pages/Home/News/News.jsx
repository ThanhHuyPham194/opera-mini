import React from 'react';
import NewItem from '../../../components/NewItem/NewItem';
import TextStroke from '../../../components/TextStroke/TextStroke';
import new1 from '../../../assets/images/new1.png';
import new2 from '../../../assets/images/new2.png';
import './News.scss';
import ButtonSeeAll from '../../../components/ButtonSeeAll/ButtonSeeAll';
export default function News() {
    return (
        <div className='news container'>
            <TextStroke stroke='news'>Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.</TextStroke>
            <div className="news__wrapper">
                <NewItem title='All Beethoven Concert' content="Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments." src={new1} />
                <NewItem title='Swan Lake' content="Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments." src={new2} />
                <div className="more">
                    <ButtonSeeAll />
                </div>
            </div>
        </div>
    );
}
