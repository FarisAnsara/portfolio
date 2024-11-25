import React from 'react';

const Title = ({ title, className }) => {
  return (
    <div className={`text-3xl md:text-4xl font-bold text-gray-100 ${className}`}>
        {title}
    </div>
  );
};

export default Title;
