import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("Alternando tema. Tema atual:", theme);
    toggleTheme();
    console.log(
      "Novo tema após alternar:",
      document.documentElement.getAttribute("data-theme")
    );
  };

  return (
    <button
      onClick={handleToggle}
      className="btn btn-link p-0"
      aria-label={`Alternar para modo ${
        theme === "light" ? "escuro" : "claro"
      }`}
      style={{
        fontSize: "1.25rem",
        color: "var(--navbar-text)",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
