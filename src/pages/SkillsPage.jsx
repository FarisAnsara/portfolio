import React from 'react';
import Header from '../components/Header';
import { FaPython, FaJava, FaLinux, FaReact } from 'react-icons/fa';
import { DiSqllite, DiDart } from "react-icons/di";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPandas, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy, SiJupyter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import BodyText from '../components/BodyText';
import MatlabIcon from '../assets/images/matlab_icon.svg'

// Define an array of skill objects
const skills = [
  { icon: <FaPython size={50} />, label: "Python" },
  { icon: <FaJava size={50} />, label: "Java" },
  { icon: <IoLogoJavascript size={50} />, label: "JavaScript" },
  { icon: <DiDart size={50} />, label: "Dart" },
  { icon: <img src={MatlabIcon} alt='Matlab' className='w-12 h-12'/>, label: "Matlab" },
  { icon: <FaReact size={50} />, label: "React" },
  { icon: <RiTailwindCssFill size={50} />, label: "Tailwind CSS" },
  { icon: <FaLinux size={50} />, label: "Linux" },
  { icon: <DiSqllite size={50} />, label: "SQLite" },
  { icon: <RiFlutterFill size={50} />, label: "Flutter" },
  { icon: <BiLogoSpringBoot size={50} />, label: "Spring Boot" },
  { icon: <SiPandas size={50} />, label: "Pandas" },
  { icon: <SiTensorflow size={50} />, label: "TensorFlow" },
  { icon: <SiKeras size={50} />, label: "Keras" },
  { icon: <SiScikitlearn size={50} />, label: "Scikit-learn" },
  { icon: <SiNumpy size={50} />, label: "NumPy" },
  { icon: <SiJupyter size={50} />, label: "Jupyter" },
  { icon: <VscVscode size={50} />, label: "VS Code" },
];

const SkillsPage = ({ isHome }) => {
  const header = isHome ? <Header title="Skills" className="text-center p-16 pt-28" /> : <div className="pt-28" />;

  return (
    <section className="py-8 w-full max-w-full">
      {header}
      <div className="container mx-auto w-full max-w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center hover:border-b">
              <div className="mb-2">{skill.icon}</div>
              <BodyText bodyText={skill.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
