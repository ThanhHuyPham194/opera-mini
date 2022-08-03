import React, { Children } from 'react';
import './TextStroke.scss';
export default function TextStroke({ stroke, extraStroke, normal, children, position }) {
    return (
        <div className='text-stroke'>
            {stroke &&
                <div className="text-stroke__group">
                    <p className="main">{stroke} {extraStroke && <span>{extraStroke}</span>}</p>
                    <p className="sub">{stroke} {extraStroke && <span>{extraStroke}</span>}</p>
                </div>
            }
            {normal &&
                <div className="text-stroke__normal" style={position && { textAlign: position }}>
                    <p>{normal}</p>
                </div>
            }
            {children &&
                <p className='text-stroke__content'>{children}</p>
            }
        </div>
    );
}


