import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ title, description, image, technologies, githubUrl}) {
  const liveUrl = "#";
  return (
    <div className="glass-effect rounded-2xl overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-neutral-700 text-[#ffffff]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-400 hover:text-red-300 font-bold"
            >
              <ExternalLink className="w-6 h-6" />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Github className="w-6 h-6" />
              
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}