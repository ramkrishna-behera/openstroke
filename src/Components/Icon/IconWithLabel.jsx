import React from 'react';

const IconWithLabel = ({ svg, name }) => {
  return (
    <div className='space'>
      <div className='innerspace'>
        <div className='iconholder'>
          <i style={{ flexShrink: 0 }}>
            <img src={svg} alt="" />
            
          </i>
        </div>
        <div className='iconname'>
          {name}
        </div>
      </div>
    </div>
  );
};

export default IconWithLabel;
