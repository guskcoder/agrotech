import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// Função que efetivamente aplica o tema no documento
const applyTheme = (theme) => {
  // Define o atributo data-theme no elemento html
  document.documentElement.setAttribute("data-theme", theme);

  // Adiciona ou remove a classe 'dark' do body
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

  // Salva o tema no localStorage
  localStorage.setItem("theme", theme);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Tenta recuperar o tema do localStorage
    const savedTheme = localStorage.getItem("theme");
    // Retorna o tema salvo ou o padrão 'light'
    return savedTheme || "light";
  });

  // Aplica o tema quando o componente montar ou quando o tema mudar
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
