import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import NotFoundPage from './pages/NotFoundPage';
import React from 'react'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';
import MainPageLayout from './layouts/MainPageLayout';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<MainPageLayout />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='education' element={<EducationPage />} />
      <Route path='experience' element={<ExperiencePage />} />
      <Route path='projects' element={<ProjectsPage />} />
      <Route path='skills' element={<SkillsPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    </>
  ), 
  { basename: '/portfolio' } // Add the basename here
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
