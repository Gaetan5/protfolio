import { create } from 'zustand';

// Définir le type de l'état
interface State {
  theme: 'light' | 'dark'; // Exemple : thème clair/sombre
  toggleTheme: () => void;
  activeSection: string; // Section active (exemple : "home", "about", etc.)
  setActiveSection: (section: string) => void;
  activeMenuItem: string; // Élément de menu actif
  setActiveMenuItem: (menuItem: string) => void;
}

// Créer le store Zustand
const useMouveStore = create<State>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
  activeMenuItem: 'home', // Initialiser avec l'élément de menu par défaut
  setActiveMenuItem: (menuItem) => set({ activeMenuItem: menuItem }),
}));

export default useMouveStore;
