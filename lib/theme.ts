export const themes = {
  light: "light",
  dark: "dark"
}

export const getTheme = () => {
  if (typeof window === "undefined") return "light"
  return localStorage.getItem("theme") || "light"
}

export const setTheme = (theme: string) => {
  localStorage.setItem("theme", theme)
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(theme)
}