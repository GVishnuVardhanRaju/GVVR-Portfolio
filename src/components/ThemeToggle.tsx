import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
    }
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-muted-foreground" />}
    </button>
  );
};

export default ThemeToggle;
