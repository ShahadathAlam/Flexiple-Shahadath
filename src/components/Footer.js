export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <a href="/">Flexiple</a>
        </div>

        {/* Menu (Responsive) */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Terms of use
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </li>

          <li>
            <p>&copy; 2024 Flexiple Website</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
