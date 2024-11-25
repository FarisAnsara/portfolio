import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';

const MastersCourses = ({ visibleCards }) => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('/masters_courses.json', {
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((myJson) => {
            setData(myJson.masters_courses);
        })
        .catch((error) => console.error('Error fetching masters_courses:', error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex flex-row justify-center space-x-4'>
            {data.slice(0, visibleCards).map((course) => (
                <CourseCard 
                    cardIndex={course.id}
                    courseCard={course} />
            ))}
        </div>
    );
};

export default MastersCourses;
