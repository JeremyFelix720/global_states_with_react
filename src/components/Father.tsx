import Brother from "./Brother";

export default function Father(props: {familyName: string}) {
  // ETATS

  // COMPORTEMENTS

  // AFFICHAGE
  return (
    <>
      <h4>
        Nom du père : {props.familyName}
        <Brother familyName={props.familyName} />
      </h4>
    </>
  )
}
