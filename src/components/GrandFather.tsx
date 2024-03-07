import Father from "./Father";

export default function Grandfather(props: {greatGrandfatherFamilyName: string}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du grand-père : {props.greatGrandfatherFamilyName} DENLEDO
          <Father grandfatherFamilyName={props.greatGrandfatherFamilyName} />
        </h4>
      </section>
    </>
  )
}
