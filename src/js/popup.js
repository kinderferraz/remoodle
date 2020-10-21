/* Tema noturno e popups.
 * Neste arquivo serãp definidas as funções necessarias para aplicar o
 * tema escuro e os event listeners para mostrar os popups */

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

const temaSwitch = document.querySelector("#tema-switch");
temaSwitch.addEventListener("click", switchTema);

/* PopUps */
const popups = document.querySelectorAll(".popup");

const togglePopup = (e) => {
  const popup = e.currentTarget.querySelector(".popuptext");
  popup.classList.toggle("show");
  setTimeout((el) => {
    el.classList.contains("show") ?
      el.classList.toggle("show") : null;
  }, 60000, popup);

};

popups.forEach((popup) => popup.addEventListener("click", togglePopup, true));
