import { useContext } from "react";
import { FamilyContext } from "../App";
import Father from "./Father";

export default function Grandfather() {
  // ETATS
  const grandfatherFamilyName = useContext(FamilyContext).familyName

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du grand-père : {grandfatherFamilyName} DENLEDO
          <Father />
        </h4>
      </section>
    </>
  )
}
