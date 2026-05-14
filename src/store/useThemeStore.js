import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'light', // default to light theme for a corporate, clean engineering look
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    return { theme: newTheme };
  }),
  setTheme: (theme) => set(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return { theme };
  })
}));
