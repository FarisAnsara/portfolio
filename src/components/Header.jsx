import React from 'react';

const Header = ({ title, className }) => {
  return (
    <h1 className={`text-4xl md:text-5xl font-extrabold text-gray-100 ${className}`}>
        {title}
    </h1>
  );
};

export default Header;
