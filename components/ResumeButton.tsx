'use client';

import { Download } from 'lucide-react';

export default function ResumeButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Siranjeevi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group"
      aria-label="Download Resume"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-teal-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
        <div className="relative bg-teal-600 hover:bg-teal-700 text-white px-4 py-8 rounded-lg shadow-xl transition-all duration-300 transform group-hover:scale-105">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 bg-yellow-400 rounded-full" />
              <Download className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center">
              {['R', 'E', 'S', 'U', 'M', 'E'].map((letter, index) => (
                <span
                  key={index}
                  className="text-sm font-bold tracking-wider"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
