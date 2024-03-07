import Father from "./Father";

export default function Grandfather(props: {familyName: string}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <h4>
        Nom du grand-père : {props.familyName}
        <Father familyName={props.familyName} />
      </h4>
    </>
  )
}
