import React from "react";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

const estaRegistrado = false;
let content;
function Renderizado() {
  if (estaRegistrado) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
}
export default Renderizado;
