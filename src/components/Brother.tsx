// import { useContext, useState } from "react"
import { useState } from "react"
import { useFamilyStore } from "../App";

export default function Brother() {
  // ETATS
  const brotherFamilyName = useFamilyStore().familyName;
  const updateFamilyName = useFamilyStore().setFamilyName;
  const [newFamilyName, setNewFamilyName] = useState(brotherFamilyName);

  // COMPORTEMENTS
  // Mise à jour de l'état "newFamilyName" du composant "Brother".
  const handleChangeFamilyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFamilyName(event.target.value);
  }

  // Remontée de l'état "newFamilyName" (du composant "Brother") dans le parent lointain "App" qui contient l'état global "FamilyContext". 
  const handleUpdateFamilyName = () => {
    updateFamilyName(newFamilyName);
  }

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du frère : {brotherFamilyName} DENLEDO
        </h4>
        <input
          type="text"
          value={newFamilyName}
          onChange={handleChangeFamilyName}
        />
        <button onClick={handleUpdateFamilyName}>Changer le prénom</button>
      </section>
    </>
  )
}
