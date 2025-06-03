import React from 'react';

function About() {
  return (
    <div className="bg-black min-h-screen py-10 px-6 sm:px-10 text-gray-200 font-sans">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl text-center font-extrabold text-yellow-500 mb-6 border-b pb-2 border-white">
          About Me
        </h1>

        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I am currently pursuing a <strong className="text-white">Bachelor of Computer Applications (BCA)</strong> at{' '}
            <strong className="text-white">Tribhuvan University (TU)</strong>, enrolled at{' '}
            <strong className="text-white">Universal College</strong>.
          </p>


          <div>
            <h2 className="text-2xl text-center font-semibold text-yellow-500 border-b pb-2 mt-6 mb-3">
              Skills in Web Development
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4">
              <li>
                <strong>HTML:</strong> The foundation of web pages, structuring content effectively.
              </li>
              <li>
                <strong>CSS:</strong> Styling web pages to create visually appealing designs.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid UI development.
              </li>
              <li>
                <strong>PHP:</strong> Server-side scripting for dynamic web applications.
              </li>
              <li>
                <strong>React.js:</strong> Building interactive user interfaces with reusable components.
              </li>
              <li>
                <strong>MySQL:</strong> Managing databases to store and retrieve application data efficiently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
