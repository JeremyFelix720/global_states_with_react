import Father from "./Father";

export default function Grandfather(props: {greatGrandfatherFamilyName: string, updateFamilyName: (newFamilyName: string) => void}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du grand-père : {props.greatGrandfatherFamilyName} DENLEDO
          <Father
            grandfatherFamilyName={props.greatGrandfatherFamilyName}
            updateFamilyName={props.updateFamilyName}
          />
        </h4>
      </section>
    </>
  )
}
