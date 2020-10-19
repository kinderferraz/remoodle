const disc = {
  "1 semestre": [{
    "nome": "Desenvolvimento WEB 1",
    "sigla": "DW1A3",
    "prof": "Josceli"
  },{
    "nome": "Estatistica e probabilidade",
    "sigla": "ESPA3",
    "prof": "Maria Eduarda"
  }]
};

const painel = document.querySelector("#painel");
let semestre = "1 semestre";


const discCards = disc[semestre].map((d) => {
  let card = document.createElement("div");
  let titulo = document.createElement("h3");
  let sigla = document.createElement("h4");
  let prof = document.createElement("h4");

  titulo.innerText = d.nome;
  sigla.innerText = d.sigla;
  prof.innerText = d.prof;

  card.appendChild(titulo);
  card.appendChild(sigla);
  card.appendChild(prof);

  card.classList.add("disc-card");

  painel.appendChild(card);
});
