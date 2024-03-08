import { create } from 'zustand'
import './App.css'
import GreatGrandfather from "./components/GreatGrandfather.tsx";
import { useCallback } from 'react';

const initialFamilyName = "Geoffrey"

interface FamilyState {
  familyName: string
  setFamilyName: (newFamilyName: string) => void
}

export const useFamilyStore = create<FamilyState>()((set) => ({
  familyName: initialFamilyName,
  setFamilyName: (newFamilyName) => set(() => ({ familyName: newFamilyName })),
}))

export default function App() {

  // ETATS
  const familyName = useFamilyStore().familyName;
  const updateFamilyName = useFamilyStore().setFamilyName;
  
  // COMPORTEMENTS
  const resetFamilyName = useCallback(() => {
    updateFamilyName(initialFamilyName);
  }, [])

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h1>Héritage du prénom unique de la famille DENLEDO : {familyName}</h1>
        <GreatGrandfather/>
        <button onClick={resetFamilyName}>Réassigner le prénom originel : {initialFamilyName}</button>
      </section>
    </>
  )
}
