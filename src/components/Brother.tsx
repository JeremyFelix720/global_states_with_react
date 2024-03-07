import { useState } from "react"

// La props "fatherFamilyName" est transmise du composant "Father" au composant "Brother".
// L'événement "updateFamilyName" transmet l'état "newFamilyName" de l'enfant "Brother" au parent "Father".
export default function Brother(props: {fatherFamilyName: string, updateFamilyName: (newFamilyName: string) => void}) {
  // ETATS
  const [newFamilyName, setNewFamilyName] = useState(props.fatherFamilyName)

  // COMPORTEMENTS

  // Mise à jour de l'état "newFamilyName" du composant "Brother".
  const handleChangeFamilyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFamilyName(event.target.value)
  }

  // Remontée de l'état "newFamilyName" dans le parent "Father" du composant "Brother". 
  const handleUpdateFamilyName = () => {
    props.updateFamilyName(newFamilyName)
}

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du frère : {props.fatherFamilyName} DENLEDO
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
