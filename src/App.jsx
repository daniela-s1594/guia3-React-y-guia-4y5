// import Renderizado from "./components/componente1/Renderizado.jsx";
// import ProjectsPage2 from "./components/componente1/user";
// import MyApp from "./components/componente1/primerComp";
//import ShoppingList from "./components/componente1/Listas";
//import CardsList from "./components/componente1/ecards";
import { Greetings } from "./components/componente1/greetings";
import { Greeter } from "./components/componente1/greeter";
import React from "react";

const App = () => {
  return (
    <div classname="container">
      <Greeter first="Juan" last="Lopez"/>
      <Greeter first="Luis" last="Martinez"/>
      <Greeter first="Juan" last="Linda"/>
    </div>
  );
};

export default App;
