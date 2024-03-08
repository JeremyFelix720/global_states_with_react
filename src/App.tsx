import { createContext, useCallback, useState } from 'react'
import './App.css'
import GreatGrandfather from "./components/GreatGrandfather.tsx";

const initialFamilyName = "Geoffrey"

export const FamilyContext = createContext<{
  familyName: string,
  setFamilyName: (familyName: string) => void,
}>({
  familyName: "abc",
  setFamilyName: () => {},
})

export default function App() {

  // ETATS
  const [familyNameState, setFamilyNameState] = useState(initialFamilyName);
  
  // COMPORTEMENTS
  
  const resetFamilyName = useCallback(() => {
    setFamilyNameState(initialFamilyName);
  }, [])
  

  // AFFICHAGE
  return (
    <>
      <FamilyContext.Provider value={{familyName: familyNameState, setFamilyName: setFamilyNameState}}>
        <h1>Héritage du prénom unique de la famille DENLEDO : {familyNameState}</h1>
        <GreatGrandfather/>
        <button onClick={resetFamilyName}>Réassigner le prénom originel : {initialFamilyName}</button>
      </FamilyContext.Provider>
    </>
  )
}
