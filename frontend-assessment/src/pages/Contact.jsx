import React, { useState } from 'react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } else {
      alert('⚠️ Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-yellow-100 via-yellow-200 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-xl min-h-[600px] p-10 flex flex-col justify-between animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold text-yellow-700 mb-6 border-b border-yellow-300 pb-2">
            Contact Us
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            We'd love to hear from you! Whether it's feedback, questions, or support — feel free to drop us a message.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="px-3">
                  <UserIcon className="h-5 w-5 text-yellow-600" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-3 py-2 focus:outline-none focus:ring-0"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="px-3">
                  <EnvelopeIcon className="h-5 w-5 text-yellow-600" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 focus:outline-none focus:ring-0"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message / Description</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-0"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
