import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import SignUpForm from './pages/SignUpForm';
import UsersPage from './pages/UsersPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const handleSignUp = (name, email) => {
    setUser({ name, email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <SignUpForm onSignUpSuccess={handleSignUp} />;
  }

  return (
    <Router>
      <Navbar userName={user.name} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/profile" element={<UsersPage user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
