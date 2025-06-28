import { create } from "zustand";

export const useThemeStore = create((set) => ({
     // Should log the selected theme
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));