'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#a0f7f7] via-[#b4f8f8] to-[#c8f9f9]">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-teal-700 animate-pulse">
          Loading<span className="inline-block animate-bounce">.</span>
          <span className="inline-block animate-bounce delay-100">.</span>
          <span className="inline-block animate-bounce delay-200">.</span>
        </h1>
        <div className="w-80 h-2 bg-teal-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-teal-600 text-lg font-medium">{progress}%</p>
      </div>
    </div>
  );
}
