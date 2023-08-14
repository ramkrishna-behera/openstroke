import React from 'react';
import close from '../../Assets/Icon/close.svg';
import './style.css';

const Ad = () => {
  return (
    <div className='ad'>
        <div className='adBanner'>
            <img src={close} alt="SVG close" />
        </div>
    </div>
  )
}

export default Ad;