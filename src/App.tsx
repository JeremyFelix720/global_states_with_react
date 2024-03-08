import { create } from 'zustand'
import './App.scss'
import Contener from './components/Contener';

const defaultTheme = "light"

type ThemeValue = "light" | "dark"

interface ThemeState {
  theme: ThemeValue
  setTheme: (newTheme: ThemeValue) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: defaultTheme,
  setTheme: (newTheme : ThemeValue) => set(() => ({ theme: newTheme })),
}))

export default function App() {

  // ETATS
  const theme = useThemeStore().theme
  // const updateTheme = useThemeStore().setTheme;
  
  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className={theme === "light" ? "light" : "dark"}>
        <Contener />
      </section>
    </>
  )
}
