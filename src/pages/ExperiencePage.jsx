import React from 'react'
import Header from '../components/Header'
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import HoverCards from '../components/HoverCards';
import BodyText from '../components/BodyText';

const ExperiencePage = ({isHome = false}) => {
  
  const header = isHome? <Header title="Experience" className="text-center p-16 pt-28" /> : <div className='pt-28' />;
  const experiences = [
    {
      title: "Full Stack Develepmeny Intern",
      company: "ProgressSoft Corporation",
      location: "Amman, Jordan",
      dates: "August 2023 - September 2023",
      details: "Worked on developing and deploying scalable web applications...",
      responsibilities: "Developed features, optimized code, collaborated in teams",
      achievements: "Implemented a feature that improved speed by 30%",
    },
  ];

  return (
    <section className='w-full max-w-ful'>
      {header}
      <div className="container mx-auto w-full max-w-full pl-[20%] pr-[20%] pb-8">
        <div className="p-8 text-white rounded-3xl text-center hover:duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-black">
          <Title title='Full Stack Develepment Intern'/>
          <Subtitle subtitle='ProgressSoft Corporation' className='not-italic' />
          <Subtitle subtitle='Amman, Jordan' className='not-italic'/>
          <Subtitle subtitle='August 2023 - September 2023' />
          <ul className='list-disc pt-6 text-left' >
            <li>
            <BodyText bodyText='Engineered an API using Java and Spring Boot to facilitate the creation of bank accounts for users, generating cheques and 
            processing ONUS cheques ' />
            </li>
            <li>
            <BodyText bodyText='Collaborated with the Electronic Cheque Clearing (ECC) team to understand system requirements and ensure seamless 
            integration of backend functionalities ' />
            </li>
            <li>
            <BodyText bodyText='Initiated the frontend development using Angular, although primarily focused on backend tasks due to the scope of the project' />
            </li>
            <li>
            <BodyText bodyText='Completed intern training within the first week and swiftly transitioned to contributing to the ONUS cheque clearing 
            system, demonstrating strong adaptability and quick learning capabilities' />
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-full pl-[20%] pr-[20%] p-8">
        <div className="p-8 text-white rounded-3xl text-center hover:duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-black">
          <Title title='Mobile Develepmeny Intern'/>
          <Subtitle subtitle='ProgressSoft Corporation' className='not-italic' />
          <Subtitle subtitle='Amman, Jordan' className='not-italic'/>
          <Subtitle subtitle='July 2022 - September 2022' />
          <ul className='list-disc pt-6 text-left' >
            <li>
            <BodyText bodyText='Developed a comprehensive sneaker app using Dart and Flutter, integrating essential features such as data scraping, user 
            authentication, and responsive design' />
            </li>
            <li>
            <BodyText bodyText='Designed and implemented a mobile game using the Flame game engine, including features like collision detection, score 
            counter, and background music ' />
            </li>
            <li>
            <BodyText bodyText='Engineered a QR-payment data parser to facilitate seamless payment processing within the mobile app' />
            </li>
            <li>
            <BodyText bodyText='Worked across both frontend and backend aspects of mobile applications, ensuring a cohesive and functional user 
            experience ' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage