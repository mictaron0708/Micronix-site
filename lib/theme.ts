export const toggleTheme = () => {
  const root = document.documentElement;
  
  if (root.classList.contains("dark-theme")) {
    root.classList.remove("dark-theme");
    root.classList.add("white-theme");
    localStorage.setItem("theme", "white");
  } else {
    root.classList.remove("white-theme");
    root.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
};