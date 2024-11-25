import React from 'react';

const Subsubtitle = ({ subtitle, className }) => {
  return (
    <div className={`text-xl md:text-2xl font-semibold mb-2 text-center ${className}`}>
        {subtitle}
    </div>
  );
};

export default Subsubtitle;
