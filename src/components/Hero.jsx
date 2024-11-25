import React from 'react';
import { FaCog } from 'react-icons/fa';
import Header from './Header';

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center pt-24 p-4 md:p-16 lg:p-24 h-screen w-full max-w-full">
      <div className="w-full md:w-3/5 space-y-4 text-center md:text-left mt-6 md:ml-8 md:mt-0  max-w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
          Hello, I'm Faris Ansara
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          MSc Data Science | University of Bath 
          <br></br>
          BEng Mechanical and Electrical Engineering | University of Bristol
        </p>
        {/* <p className="text-base md:text-l mt-4">
          I specialize in machine learning, data science, and software engineering, with a passion for solving complex problems.
        </p> */}
      </div>

      <div className="flex w-full md:w-2/5 justify-center space-x-4 md:space-x-6">
        <FaCog className="h-24 w-24 animate-spin-slow" />
        <FaCog className="h-32 w-32 animate-spin-slower" />
        <FaCog className="h-24 w-24 animate-spin-slow" />
      </div>
    </section>
  );
};

export default Hero;


