import { useEffect, useState } from "react";

// Initialize state from localStorage
const savedTheme = localStorage.getItem("theme") || "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(savedTheme);

  // Sync theme class on <html> on mount and whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center gap-1">
      {/* Sun icon (outside left) */}
      <span className="text-yellow-500 text-lg">☀️</span>

      {/* Toggle */}
      <button
        onClick={toggleTheme}
        className="
          relative w-14 h-7 rounded-full
          bg-gray-300 dark:bg-gray-700
          transition-colors duration-300
        "
        aria-label="Toggle theme"
        >
        {/* Sliding green circle */}
        <span
          className={`
            absolute top-1 left-1
            w-5 h-5 rounded-full
            bg-green-500
            transition-transform duration-300
            ${theme === "dark" ? "translate-x-7" : "translate-x-0"}
          `}
        />
      </button>
      {/* Moon icon (outside right) */}
      <span className="text-blue-300 text-lg">🌙</span>
    </div>
   
      
      
    
  );
};

export default ThemeToggle;
