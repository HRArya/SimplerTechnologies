import React from 'react';

export default function UsersPage({ user }) {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-indigo-100 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        {/* User Avatar */}
        <img
          src="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=User"
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-200 shadow-sm mb-4"
        />

        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">
          Welcome, {user.name} 👋
        </h1>
        <p className="text-gray-600 mb-4">
          We're glad to have you on our site. Here's your account information:
        </p>

        {/* User Details */}
        <div className="text-left space-y-2 text-gray-700 text-sm">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          {/* Add more user info as needed */}
        </div>
      </div>
    </div>
  );
}
