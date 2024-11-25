import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Subsubtitle from '../components/Subsubtitle';
import BodyText from '../components/BodyText';

const EducationMasters = ({isHome = true}) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/masters_courses.json`, {
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
              <BodyText bodyText={dissInfo.details}></BodyText>
            )}
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500">Loading dissertation info...</p>
      )}

      {isHome ? (
      <Subtitle className='text-xl font-semibold pt-8 text-center not-italic' subtitle='Relevant Modules'/>
      ):
      (<></>)}

    {courseData ? (
      <div className="container mx-auto w-full max-w-full">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:${isHome? 'grid-cols-3' : 'grid-cols-4'} gap-8 p-12`}>
          {courseData.map((card) => (
            <div className="group" >
              <div className="realtive flex h-full p-6 rounded-xl shadow-2xl justify-center shadow-black bg-gradient-to-tl from-cyan-900 to-black transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="inset-0 absolute flex items-center justify-center text-white [backface-visibility:hidden]">
                  <Subtitle subtitle={card.title} className="text-center not-italic p-4 font-bold" />
                </div>
                <div className="inset-0 flex-row items-center justify-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <Subsubtitle subtitle={card.title} />
                  <BodyText bodyText={card.description || "No additional details available."} className='text-base'/>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      // <HoverCard courseData={courseData} />
      ) : (
        <p className="text-center text-gray-500">Loading course data...</p>
    )}
    </section>
  );
};

export default EducationMasters;
