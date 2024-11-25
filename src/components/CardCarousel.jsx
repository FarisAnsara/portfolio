import React, { useState } from 'react';
import Subsubtitle from './Subsubtitle';
import OptimalPathfindingImage from '../assets/images/micromouse_image.png'

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: 'Optimal Pathfinding and Execution Strategies for Micromouse Maze Navigation',
      image: OptimalPathfindingImage,
    },
    {
      title: 'Project 2: Reinforcement Learning Optimization',
      image: OptimalPathfindingImage,
    },
    {
      title: 'Project 3: Advanced Data Visualization Techniques',
      image: OptimalPathfindingImage,
    },
    {
      title: 'Project 4: Predictive Analytics for Healthcare',
      image: OptimalPathfindingImage,
    },
  ];

  const cardsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1; // 3 for large, 2 for medium, 1 for small screens
  const totalSlides = Math.ceil(cards.length / cardsPerView);

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 md:w-[50%] lg:w-[33.33%] p-4"
            >
              <div className="rounded-[20%] bg-gray-50 h-auto overflow-hidden hover:scale-105 transition-transform duration-500">
                <Subsubtitle
                  subtitle={card.title}
                  className="w-full text-black p-3 pb-0"
                />
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === totalSlides - 1}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
