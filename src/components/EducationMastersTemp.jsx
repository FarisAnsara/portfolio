import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Subsubtitle from '../components/Subsubtitle';
import BodyText from '../components/BodyText';

const EducationMasters = ({isHome = true}) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('/masters_courses.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setCardData(data.masters_courses))
      .catch((error) => console.error('Error fetching masters_courses:', error));
  }, []);

  const dissInfo = cardData.find((card) => card.id === 'Diss');
  const tempCourseData = cardData.filter((card) => card.id !== 'Diss');
  const courseData = isHome? tempCourseData.filter((card) => card.show_home === 1): tempCourseData

  return (
    <section className='mb-8 w-full max-w-full'>
      <Title title="MSc Data Science" className="text-center not-italic" />
      <Subtitle subtitle="University of Bath 2023-2024" className="text-center" />

      {dissInfo ? (
        <section className="p-8 text-white rounded-lg">
          <div className="max-w-2xl mx-auto">
            <Subsubtitle subtitle={dissInfo.title} className="text-xl font-semibold mb-2 text-center" />
            <BodyText bodyText={dissInfo.description} className="text-center italic mb-4"></BodyText>
            {dissInfo.details && (
              <BodyText bodyText={dissInfo.details} className="text-center"></BodyText>
            )}
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500">Loading dissertation info...</p>
      )}

      {isHome ? (
      <Subtitle className='text-xl font-semibold pt-8 text-center not-italic' subtitle='Relevant Courses'/>
      ):
      (<></>)}

      {courseData ? (
      <div className="container mx-auto p-8 w-full max-w-full">
        <div className="flex flex-wrap justify-evenly gap-8">
          {courseData.map((card, index) => (
            <div
              key={index}
              className="p-8 text-white rounded-lg min-w-[90%] md:min-w-[45%] lg:min-w-[45%] max-w-[45%] bg-gradient-to-tl from-cyan-900 to-black shadow-2xl shadow-black border"
            >
                  <Subtitle subtitle={card.title} className="text-center not-italic p-4 font-bold" />
                  
                  {/* <BodyText bodyText={card.short_description || 'No additional details available.'} /> */}

                  <ul className="list-disc pl-3 pr-3">
                    <li>
                      <BodyText bodyText={card.short_description || 'No additional details available.'} />
                    </li>
                    {card.coursework ? (<li className>
                      <BodyText bodyText={card.coursework || null}/> 
                    </li>) : (<></>)}
                  </ul>
              </div>
          ))}
        </div>
      </div>
      ) : (
        <p className="text-center text-gray-500">Loading course data...</p>
    )}
    </section>
  );
};

export default EducationMasters;
