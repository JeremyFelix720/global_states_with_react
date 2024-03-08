import { useContext } from "react";
import { FamilyContext } from "../App";
import Brother from "./Brother";

export default function Father() {
  // ETATS
  const fatherFamilyName = useContext(FamilyContext).familyName

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du père : {fatherFamilyName} DENLEDO
          <Brother />
        </h4>
      </section>
    </>
  )
}
