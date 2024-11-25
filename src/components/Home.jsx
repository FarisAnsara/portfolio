// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <section id="home" className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl">A [Your Profession]</p>
      </div>
    </section>
  );
}

export default Home;
