import React from 'react'
import Subsubtitle from './Subsubtitle'
import BodyText from './BodyText'

const CourseCard = ( {cardIndex, courseCard} ) => {
  return (
    <div key={cardIndex} className='card'>
        <div className='card-inner bg-gray-600 border border-gray-50 rounded-lg'>
            <div className='card-front'>
                <Subsubtitle subtitle={courseCard.title} className='not-italic text-center p-4' />
            </div>
            <div className='card-back bg-gray-600'>
                <BodyText bodyText={courseCard.description} />
            </div>
        </div>
    </div>
  )
}

export default CourseCard