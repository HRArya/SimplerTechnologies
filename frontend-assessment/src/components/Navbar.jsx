import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // using react-icons

export default function Navbar({ userName, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-lg font-bold">
          <Link to="/">MySite</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>

          {userName ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <FaUserCircle size={22} />
                <span className="hidden sm:inline text-sm font-medium">{userName}</span>
              </button>
              <button
                onClick={onLogout}
                className="ml-2 bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-400">Login</Link>
          )}
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 px-4">
          <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>

          {userName ? (
            <>
              <button
                onClick={() => {
                  navigate("/profile");
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <FaUserCircle size={22} />
                <span className="text-sm font-medium">{userName}</span>
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
