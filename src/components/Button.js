export default function Button({ children, variant, onClick, border }) {
  // Define Tailwind CSS classes for button variants
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  };
  // Add border styling if specified
  const borderClasses = border ? "border-2 border-white" : "";
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${borderClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
