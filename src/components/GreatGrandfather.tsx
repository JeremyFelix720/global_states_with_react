import Grandfather from "./GrandFather";

export default function GreatGrandfather(props: {familyName: string}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <section className="memberBlocks">
        <h4>
          Nom de l'arrière grand-père : {props.familyName} DEDENLEDO
          <Grandfather greatGrandfatherFamilyName={props.familyName} />
        </h4>
      </section>
    </>
  )
}
