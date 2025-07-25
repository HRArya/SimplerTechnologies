import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">About This Project & Role</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Frontend Assessment Tasks</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Task 1:</strong> Create a Sign-Up Page with full name, email, and password fields. Add validation and clean styling.</li>
            <li><strong>Task 2:</strong> Build a responsive Navigation Bar with links to Home, About, and Contact pages. Support mobile and desktop views.</li>
            <li><strong>Task 3:</strong> Develop a <code>&lt;UserCard /&gt;</code> React component that displays a user’s name and email in a stylish card layout.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🏢 About SimplerTechnologies</h2>
          <p className="text-gray-600">
            SimplerTechnologies is an innovative tech company focused on delivering modern, scalable, and user-centric web solutions. They value clean architecture, component reusability, and strong frontend performance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">💼 About the Job Role</h2>
          <p className="text-gray-600">
            This project was built as part of the application process for a <strong>Frontend Developer Internship</strong> at SimplerTechnologies. The responsibilities of the role include:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Developing responsive user interfaces using React</li>
            <li>Implementing clean and reusable components</li>
            <li>Collaborating with design and backend teams</li>
            <li>Using modern tools like Vite, Tailwind CSS, and Git for efficient development</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
