import React from 'react';
import UserCard from '../components/UserCard';

export default function Home({ user }) {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-gray-600 text-lg font-medium">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 via-green-200 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-2xl min-h-[700px] p-10 space-y-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-green-700 border-b border-green-300 pb-4">
          Welcome, {user.name} 👋
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          We're excited to have you on board! This platform is designed to help you manage, explore, and connect effortlessly.
          Whether you're updating your profile, exploring features, or just checking in — everything is built with your productivity in mind.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Profile Snapshot</h2>
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full bg-green-300 text-white flex items-center justify-center text-2xl font-bold">
                {user.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Joined: {user.joinDate || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
          Need help? Reach out to our support anytime.
        </p>
      </div>
    </div>
  );
}
