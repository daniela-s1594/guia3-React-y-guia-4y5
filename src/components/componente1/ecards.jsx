const user2 = [
  {
    name: "Daniela Manjarres",
    imageUrl: "public/DMV.jpg",
    imageSize: 90,
    profession: "Tecnologa en Análisis y desarrollo de software",
  },
  {
    name: "Maria",
    imageUrl: "src/assets/Maria.jpg",
    imageSize: 90,
    profession: "Ama de casa",
  },
  {
    name: "Jose",
    imageUrl: "src/assets/Jose.jpg",
    imageSize: 90,
    profession: "Carpintero",
  },
  {
    name: "Cleopatra",
    imageUrl: "src/assets/Cleopatra.jpg",
    imageSize: 90,
    profession: "Reina de egipto(Faraona)",
  },
];
/*

*/
export default function CardsList() {
  const listItems2 = user2.map((person) => (
    <li>
      <img src={imageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
      </p>
    </li>
  ));
  return <ul>{listItems2}</ul>;
}


