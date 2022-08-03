import React from 'react';
import './NewItem.scss';
import vecto from '../../assets/svg/vector.svg';
export default function NewItem({ title, content, src }) {

    return (
        <div className='new-item'>
            <div className="new-item__img">
                <img src={src} alt="new_image" />
            </div>
            <div className="new-item__content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="new-item__button">
                <div className="group">
                    <p>Discovery more</p>
                    <div className="img">
                        <img src={vecto} alt="vector" />
                    </div>
                </div>
                <div className="group">
                    <p>Discovery more</p>
                    <div className="img">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.79471 5.26262L6.33676 1.80467L7.138 1.00342L12.1346 6L7.138 10.9966L6.33675 10.1953L9.79471 6.73738L9.96542 6.56667L9.724 6.56667L0.100001 6.56667L0.100001 5.43333L9.724 5.43333L9.96542 5.43333L9.79471 5.26262Z" fill="#FCF0C8" stroke="black" strokeWidth="0.2" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    );
}
