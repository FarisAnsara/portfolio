import React from 'react';

const Subtitle = ({ subtitle, className }) => {
  return (
    <div className={`text-2xl md:text-3xl italic text-gray-50 ${className}`}>
        {subtitle}
    </div>
  );
};

export default Subtitle;
