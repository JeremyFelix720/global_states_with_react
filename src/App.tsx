import { useState } from 'react'
import './App.css'
import GreatGrandfather from "./components/GreatGrandfather.tsx";

export default function App() {

  // ETATS
  const [familyName, setFamilyName] = useState("Geoffrey");

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <h1>Héritage du prénom unique de la famille Denledo : {familyName}</h1>
      <GreatGrandfather familyName={familyName} />
    </>
  )
}
