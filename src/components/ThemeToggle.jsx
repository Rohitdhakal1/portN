import { useEffect, useState } from "react";

const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const btn = (value, label) => (
        <button
            onClick={() => setTheme(value)}
            aria-pressed={theme === value}
            className={`px-2.5 py-1 rounded-full transition ${theme === value ? "bg-rust text-white" : "text-muted hover:text-ink"
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="inline-flex gap-0.5 p-0.5 font-mono text-[11px] font-bold border-2 border-ink rounded-full bg-card">
            {btn("light", "☀ light")}
            {btn("dark", "☾ dark")}
        </div>
    );
};

export default ThemeToggle;