import { useCallback } from "react"
import { useThemeStore } from "../App";

export default function Button() {
  // ETATS
  const theme = useThemeStore().theme
  const updateTheme = useThemeStore().setTheme;

  // COMPORTEMENTS
  const changeTheme = useCallback(() => {
    if(theme == "light") {
      updateTheme("dark");
    } else if(theme == "dark") {
      updateTheme("light");
    }
  }, [theme])

  // AFFICHAGE
  return (
    <>
      <button className="button" onClick={changeTheme}>Changer le theme</button>
    </>
  )
}
