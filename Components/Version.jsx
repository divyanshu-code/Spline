import React from 'react';

const Version = () => {
  return (
    <div className="min-h-screen py-12 px-4 ">
      <div className="max-w-xl mx-auto mt-60 shadow-gray-600 shadow-xs rounded-xl p-8 text-center ">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">App Version</h2>

        <p className="text-gray-500 text-lg mb-4">
          <span className="font-semibold">Current Version:</span> 1.0.0
        </p>

        <p className="text-gray-500 mb-2">
          <span className="font-semibold">Release Date:</span> July 25, 2025
        </p>

        <div className="mt-6  text-left">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">What's New:</h3>
          <ul className=" text-gray-500 space-y-1">
            <li>Added clean UI using Tailwind CSS</li>
            <li>Responsive layout for all devices</li>
            <li>Navigation using React Router DOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Version;
