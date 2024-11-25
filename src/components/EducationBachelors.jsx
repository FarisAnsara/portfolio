import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Subsubtitle from '../components/Subsubtitle';
import BodyText from '../components/BodyText';
const EducationBachelors = ({isHome = true}) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
      fetch('/bachelors_courses.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => setCardData(data.bachelors_courses))
        .catch((error) => console.error('Error fetching masters_courses:', error));
    }, []);
  
    // Find dissertation info if available
    const dissInfo = cardData.find((card) => card.id === 'IRP');
    const tempCourseData = cardData.filter((card) => card.id !== 'IRP');
    const courseData = isHome? tempCourseData.filter((card) => card.show_home === 1): tempCourseData

    
    // Group courses by year based on the data structure
    const groupedCourses = courseData.reduce((acc, course) => {
    const year = course.year; // Assuming `year` property in each course object (e.g., 2020, 2021, etc.)
    if (!acc[year]) acc[year] = [];
    acc[year].push(course);
    return acc;
    },{});
  
  return (
    <section className='pt-8 w-full max-w-full'>
      <Title title="BEng Mechanical and Electrical Engineering" className="text-center not-italic" />
      <Subtitle subtitle="University of Bristol 2020-2023" className="text-center" />
  
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
        <p className="text-center text-gray-500">Loading IRP info...</p>
      )}

      {isHome ? (
      <Subtitle className='text-xl font-semibold pt-8 text-center not-italic' subtitle='Relevant Courses'/>
      ):
      (<></>)}

      <div className="container mx-auto w-full max-w-full">
        {Object.entries(groupedCourses).map(([year, courses]) => (
          <div key={year}>
            <Subsubtitle subtitle={`Year ${year}`} className="text-xl font-semibold pt-8 text-center" />
            <div className={`container mx-auto w-full max-w-full`}>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:${isHome? 'grid-cols-2 pl-[15%] pr-[15%]' : 'grid-cols-4'} gap-8 p-12`}>
                {courses.map((card, index) => (
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
            </div>
        ))}
      </div>
      { isHome? (
      <div className="m-auto max-w-lg p-8 px-6">
        <Link
            to="/education"
            className="block bg-transparent border border-gray-50 text-white text-center p-2 px-2 rounded-full hover:bg-gray-700 shadow-black shadow-2xl" >
            <Subsubtitle subtitle='View All Courses' className='not-italic'/>
        </Link>
      </div>
      ) : (
        <div className='p-8'></div>
      )
    }
    </section>
  );
}  

export default EducationBachelors