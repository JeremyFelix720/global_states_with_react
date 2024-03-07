import Brother from "./Brother";

export default function Father(props: {grandfatherFamilyName: string, updateFamilyName: (newFamilyName: string) => void}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom du père : {props.grandfatherFamilyName} DENLEDO
          <Brother
            fatherFamilyName={props.grandfatherFamilyName}
            updateFamilyName={props.updateFamilyName}
          />
        </h4>
      </section>
    </>
  )
}
