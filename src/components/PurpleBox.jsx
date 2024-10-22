import React from 'react';
import BulletPoint from './BulletPoint';

const PurpleBox = (props) => {
  const childrenArray = React.Children.toArray(props.children);

  return (
    <div className='purpleBox text-white'>
      {childrenArray.map((item, index) => (
        <BulletPoint key={index} bulletpoint={item} />
      ))}
    </div>
  );
}

export default PurpleBox;
