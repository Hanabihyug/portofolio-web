/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const ProjectPage = () => {
  const projects = [
    {
      title: 'SmartCare',
      imageUrl: '/image/capstone1.png',
      description: 'Has successfully developed a comprehensive parenting website that allows parents to monitor and track their childrens development from an early age. Leveraging APIs and utilizing the World Health Organizations Child Growth Standards dataset, It provides a wealth of resources for parents to ensure their children are meeting important developmental milestones. The projects has Accosiated with Independent Study at Diocoding in React Web Development program.',
      projectUrl: 'https://smartcare-three.vercel.app/',
    },
    // Add more projects here...
  ];

  return (
    <Element name="projects" className="py-20 px-4 md:px-0 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-xl mb-8 leading-relaxed">
          Here is the projects I've worked on. See more details by clicking on it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ProjectPage;
