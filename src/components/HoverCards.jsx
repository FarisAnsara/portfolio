import React from 'react';

const HoverCards = () => {
  return (
    <div className="relative w-80 h-[300px] mx-auto mt-20">
      {/* Top Card */}
      <div className="absolute w-full h-full bg-blue-500 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:-translate-x-48 hover:-translate-y-4 z-20">
        <div className="p-6 text-white">
          <h3 className="text-2xl font-semibold">Top Card</h3>
          <p>This is the top card. Hover to reveal the bottom card.</p>
        </div>
      </div>
      
      {/* Bottom Card */}
      <div className="absolute w-full h-full bg-purple-500 rounded-lg shadow-lg transform translate-x-2 translate-y-2 transition-transform duration-500 ease-in-out z-10 hover:translate-x-28 hover:translate-y-0">
        <div className="p-6 text-white">
          <h3 className="text-2xl font-semibold">Bottom Card</h3>
          <p>This is the bottom card. It slides out when hovering over the top card.</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCards;
