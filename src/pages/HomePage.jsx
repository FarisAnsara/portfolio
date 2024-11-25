import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import EducationPage from './EducationPage'
import ExperiencePage from './ExperiencePage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'

const HomePage = () => {
  return (
    <>
      <Hero />
      <EducationPage isHome={true} />
      <ExperiencePage isHome={true} />
      <SkillsPage isHome={true} />
      <ProjectsPage isHome={true} />
      <ContactPage isHome={true} />
    </>
  )
}

export default HomePage