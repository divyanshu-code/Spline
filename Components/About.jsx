import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 mt-48 lg:ml-60">
      <div className="max-w-4xl mx-auto shadow-gray-600 shadow-xs rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>

        <p className="text-gray-500 text-lg mb-4">
          Welcome to <span className="font-semibold text-blue-500">Spline</span> — a platform dedicated to delivering user-friendly solutions
          with a strong focus on clean design and excellent experience.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed mb-4">
          We aim to build modern, accessible, and performance-driven web applications that solve real-world problems.
          Whether you're browsing our features or reaching out to our team, we ensure a smooth and intuitive experience.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed">
          Built with love by <span className="font-medium text-blue-500">Divyanshu</span>, Spline combines the power of React and Tailwind CSS
          to create responsive and elegant interfaces. We're continuously improving and expanding our capabilities — stay tuned!
        </p>
      </div>
    </div>
  );
};

export default About;
