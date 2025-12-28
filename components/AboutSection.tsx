'use client';

import {
  Code2,
  Database,
  Server,
  Layout,
  Boxes,
  Cloud,
} from 'lucide-react';

const frontendSkills = [
  { name: 'HTML', icon: Layout, color: 'bg-orange-100 text-orange-600' },
  { name: 'CSS', icon: Layout, color: 'bg-blue-100 text-blue-600' },
  { name: 'ReactJS', icon: Code2, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'JavaScript', icon: Code2, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'TailwindCSS', icon: Layout, color: 'bg-teal-100 text-teal-600' },
  { name: 'Next.js', icon: Boxes, color: 'bg-gray-100 text-gray-600' },
];

const backendSkills = [
  { name: 'Node.js', icon: Server, color: 'bg-green-100 text-green-600' },
  { name: 'Express.js', icon: Server, color: 'bg-gray-100 text-gray-600' },
  { name: 'Hapi.js', icon: Server, color: 'bg-orange-100 text-orange-600' },
  { name: 'Python', icon: Code2, color: 'bg-blue-100 text-blue-600' },
  { name: '.NET', icon: Server, color: 'bg-purple-100 text-purple-600' },
  { name: 'Postman', icon: Cloud, color: 'bg-orange-100 text-orange-600' },
];

const databaseSkills = [
  { name: 'MySQL', icon: Database, color: 'bg-blue-100 text-blue-600' },
  { name: 'MongoDB', icon: Database, color: 'bg-green-100 text-green-600' },
  { name: 'SQL Server', icon: Database, color: 'bg-red-100 text-red-600' },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">
          About Me
        </h2>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <p className="text-lg text-gray-700 leading-relaxed">
            A results-driven Full Stack Developer with expertise in the MERN
            stack and .NET, specializing in building scalable and
            high-performance web applications. I have a proven track record of
            leading backend re-architecting initiatives with Node.js and Hapi.js,
            and designing intuitive front-end interfaces with React.js. My
            experience spans developing secure RESTful APIs, integrating cloud
            solutions on Microsoft Azure, and managing databases like MongoDB and
            MS SQL Server to deliver robust, end-to-end solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-teal-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Layout className="w-8 h-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-teal-700">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center space-x-2 ${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
                >
                  <skill.icon className="w-4 h-4" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Server className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-700">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center space-x-2 ${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
                >
                  <skill.icon className="w-4 h-4" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6 justify-center">
            <Database className="w-8 h-8 text-cyan-600" />
            <h3 className="text-2xl font-bold text-cyan-700">Database</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {databaseSkills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center space-x-2 ${skill.color} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
              >
                <skill.icon className="w-4 h-4" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
