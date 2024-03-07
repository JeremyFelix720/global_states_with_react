import Brother from "./Brother";

export default function Father(props: {grandfatherFamilyName: string}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du père : {props.grandfatherFamilyName} DENLEDO
          <Brother fatherFamilyName={props.grandfatherFamilyName} />
        </h4>
      </section>
    </>
  )
}
