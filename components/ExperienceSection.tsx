'use client';

import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Anna University',
    year: '2015 - 2019',
    description: 'Graduated with First Class with Distinction',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'State Board',
    year: '2013 - 2015',
    description: 'Scored 85% in HSC Examinations',
  },
];

const workExperience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description:
      'Leading backend re-architecture using Node.js and Hapi.js. Developed RESTful APIs and integrated cloud solutions on Microsoft Azure.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd.',
    period: '2019 - 2021',
    description:
      'Built scalable web applications using MERN stack. Managed MongoDB and MS SQL Server databases for optimal performance.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'StartUp Tech',
    period: '2018 - 2019',
    description:
      'Designed and developed responsive user interfaces using React.js and modern CSS frameworks.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-10 h-10 text-teal-600" />
              <h3 className="text-3xl font-bold text-teal-700">Education</h3>
            </div>

            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
                  style={{
                    animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-teal-600 mt-1" />
                    <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-teal-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-10 h-10 text-blue-600" />
              <h3 className="text-3xl font-bold text-blue-700">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
                  style={{
                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {work.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {work.title}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">
                    {work.company}
                  </p>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
