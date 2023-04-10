import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, description, projectUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link href={projectUrl}>
        <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          View Project
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
