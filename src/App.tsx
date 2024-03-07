import { useCallback, useState } from 'react'
import './App.css'
import GreatGrandfather from "./components/GreatGrandfather.tsx";

const initialFamilyName = "Geoffrey"

export default function App() {

  // ETATS
  const [familyName, setFamilyName] = useState(initialFamilyName);

  // COMPORTEMENTS
  const resetFamilyName = useCallback(() => {
    setFamilyName(initialFamilyName);
  }, [])

  // AFFICHAGE
  return (
    <>
      <h1>Héritage du prénom unique de la famille DENLEDO : {familyName}</h1>
      <GreatGrandfather
        familyName={familyName}
        updateFamilyName={setFamilyName}
      />
      <button onClick={resetFamilyName}>Réassigner le prénom originel : {initialFamilyName}</button>
    </>
  )
}
