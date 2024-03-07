import Grandfather from "./GrandFather";

export default function GreatGrandfather(props: {familyName: string}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <h4>
        Nom de l'arrière grand-père : {props.familyName}
        <Grandfather familyName={props.familyName} />
      </h4>
    </>
  )
}
