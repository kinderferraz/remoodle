/* Tema noturno e acessiblidade */
let tema = "dia";

// montar o elemento link com o css
let stylesheetNoturno = document.createElement("link");
stylesheetNoturno.rel = "stylesheet";
stylesheetNoturno.type = "text/css";
stylesheetNoturno.href = "../css/noite.css";

/* Quando solicitado, aplicar o css */
const switchTema = () => {
  const header = document.querySelector("head");
  if (tema == "dia"){
    header.appendChild(stylesheetNoturno);
    tema = "noite";
  } else {
    header.removeChild(stylesheetNoturno);
    tema = "dia";
  }
};
