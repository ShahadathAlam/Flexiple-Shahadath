import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHireDevelopersClick = () => {
    alert("Hire Developers button clicked!");
  };

  const handleFindJobsClick = () => {
    alert("Find Jobs button clicked!");
  };

  const handleLoginClick = () => {
    alert("Login button clicked!");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Flexiple</a>
        </div>

        {/* Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-300">
              For Companies
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              For Talent
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Our Products
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-6">
          <Button variant="secondary" onClick={handleFindJobsClick}>
            Find Jobs
          </Button>
          <Button
            variant="primary"
            onClick={handleHireDevelopersClick}
            border="border"
          >
            Hire Developers
          </Button>
          <Button variant="primary" onClick={handleLoginClick}>
            LogIn
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white p-4 space-y-4">
          <ul>
            <li>
              <a href="#home" className="block py-2 hover:text-gray-300">
                For Companies
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 hover:text-gray-300">
                For Talent
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2 hover:text-gray-300">
                Our Products
              </a>
            </li>
          </ul>

          <div className="space-y-4 space-x-4">
            <Button variant="secondary" onClick={handleFindJobsClick}>
              Find Jobs
            </Button>
            <Button
              variant="primary"
              onClick={handleHireDevelopersClick}
              border="border"
            >
              Hire Developers
            </Button>
            <Button variant="primary" onClick={handleLoginClick}>
              LogIn
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
