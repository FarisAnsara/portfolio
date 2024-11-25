import React from 'react';
import Header from '../components/Header';
import OptimalPathfindingImage from '../assets/images/micromouse_image.png';
import TescoDataAnalysisImage from '../assets/images/tesco_data_analysis.png';
import AgeGenderClassifierImage from '../assets/images/age_gender_classifier.png';
import StudentHubApiImage from '../assets/images/student_hub_api.png';
import BankChequeClearningSystemImage from '../assets/images/bank_cheque_clearning_system.png';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = ({ isHome = false }) => {
  const header = isHome ? <Header title="Projects" className="text-center p-8 mb-8" /> : <div className="pt-28" />;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      {header}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <ProjectCard
            title="Optimal Pathfinding and Execution Strategies for Micromouse Maze Navigation"
            image={OptimalPathfindingImage}
            url_target='Optimal-Pathfinding-Micromouse'
          />
          <ProjectCard 
            title="Analysis of Tesco Purchase Data with Obesity and Diabetes in the Greater London Area" 
            image={TescoDataAnalysisImage} 
            url_target='Applied_Data_Science/blob/main/Semester%202/tesco_data_analysis.ipynb'
          />
          <ProjectCard
            title="Age and Gender Classification using Convolutional Neural Networks"
            image={AgeGenderClassifierImage}
            url_target='AgeGenderClassification'
          />
          <ProjectCard 
            title="Student Hub API" 
            image={StudentHubApiImage}
            url_target='student_hub_api'
          />
          <ProjectCard 
            title="Bank Cheque Clearning System" 
            image={BankChequeClearningSystemImage} 
            url_target='OnusCheques'
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
