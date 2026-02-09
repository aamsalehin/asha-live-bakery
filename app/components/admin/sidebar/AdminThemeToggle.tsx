"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark =
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark";

    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (dark) {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    } else {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center gap-2
        px-3 py-2 rounded-lg text-sm
        bg-[var(--admin-button-bg)]
        text-[var(--admin-button-text)]
        hover:bg-[var(--admin-button-hover)]
        transition
      "
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      {dark ? "Light" : "Dark"}
    </button>
  );
}
