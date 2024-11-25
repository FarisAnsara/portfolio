import React from 'react'
import Header from '../components/Header'
import EducationMasters from '../components/EducationMasters'
import EducationBachelors from '../components/EducationBachelors'

const EducationPage = ({isHome = false}) => {
  
  const header = isHome? <Header title="Education" className="text-center p-8 mb-8" /> : <div className='pt-28' />;

  return (
    <section>
      {header}
      <EducationMasters isHome={isHome}/>
      <EducationBachelors isHome={isHome}/>
    </section>
  )
}

export default EducationPage