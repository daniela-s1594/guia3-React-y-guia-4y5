import React from "react";

const videojuegos = [
  {
    title: "Fornite",
    genre: "Battle royale",
    isFree: True,
    id: 1,
  },
  {
    title: "Call of duty Modern Warfare II",
    genre: "Videojuego multijugador en línea",
    isFree: True,
    id: 2,
  },
  {
    title: "The Legend of Zelda",
    genre: "Videojuego de un jugador",
    isFree: False,
    id: 3,
  },
  {
    title: "Kirby y la tierra olvidada",
    genre: "Videojuego de aventura",
    isFree: False,
    id: 4,
  },
];

export default function ShoppingList() {
  const listItems = videojuegos.map((videojuegos) => (
    <li
      key={videojuegos.id}
      style={{
        color: videojuegos.isFree ? "magenta" : "darkgreen",
      }}
    >
      {videojuegos.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

