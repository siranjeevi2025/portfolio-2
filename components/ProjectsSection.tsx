'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Project Management Tool',
    description:
      'Collaborative project management platform with real-time updates, task tracking, and team communication features.',
    tech: ['Next.js', 'Express', 'PostgreSQL', 'Socket.io'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media metrics with data visualization and automated reporting capabilities.',
    tech: ['React', 'Python', 'Django', 'D3.js'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Healthcare Management System',
    description:
      'Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.',
    tech: ['Angular', '.NET', 'SQL Server', 'Azure'],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Real Estate Marketplace',
    description:
      'Property listing platform with advanced search, virtual tours, and mortgage calculator features.',
    tech: ['Vue.js', 'Node.js', 'MySQL', 'AWS'],
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
          Projects
        </h2>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-teal-600 text-teal-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-600 w-8'
                      : 'bg-teal-200 hover:bg-teal-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-teal-600 text-teal-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
