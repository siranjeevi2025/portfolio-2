'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-medium text-teal-700">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
          Hi, I'm{' '}
          <span className="text-teal-600 inline-block animate-gradient">
            Siranjeevi
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-teal-700 font-medium max-w-3xl mx-auto leading-relaxed">
          A <span className="font-bold">Full-Stack Developer</span> crafting
          robust digital solutions. I specialize in turning complex problems
          into scalable, efficient applications using the MERN stack and .NET.
          From leading backend re-architectures with Node.js to building dynamic
          interfaces with React.js, I bridge the gap between idea and execution
          in the cloud.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center space-x-2 bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </section>
  );
}
