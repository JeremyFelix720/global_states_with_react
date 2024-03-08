import { useContext } from "react";
import { FamilyContext } from "../App";
import Grandfather from "./GrandFather";

export default function GreatGrandfather() {
  // ETATS
  const greatGrandfatherFamilyName = useContext(FamilyContext).familyName

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom de l'arrière grand-père : {greatGrandfatherFamilyName} DEDENLEDO
          <Grandfather />
        </h4>
      </section>
    </>
  )
}
