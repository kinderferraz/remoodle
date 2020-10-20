/* O código relevante ao painel de disciplinas.
 * As informações relevantes a um semestre estão
 * guardadas no objeto disc, abaixo.
 * A função displayPainel seleciona o semestre relavante,
 * e mapeia sobre o vetor. Para cada objeto, coloca um card
 * referente à disciplina no elemento #painel do documento.
 *
 * Em uma aplicação real, com acesso a uma API e back-end, estes dados
 * seriam mais completos e carregados de acordo com o usuário logado.
 * Como demostração de conceito, consideramos os dados dummy a seguir
 * apropriados.
*/

/* Consts e variaveis: */
const disc = {
  "1 semestre": [{
    codigo: 1,
    nome: "Desenvolvimento WEB 1",
    sigla: "DW1A3",
    prof: "Josceli",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 2,
    nome: "Estatistica e probabilidade",
    sigla: "ESPA3",
    prof: "Maria Eduarda",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 3,
    nome: "Desenvolvimento WEB 1",
    sigla: "DW1A3",
    prof: "Josceli",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 4,
    nome: "Estatistica e probabilidade",
    sigla: "ESPA3",
    prof: "Maria Eduarda",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 5,
    nome: "Desenvolvimento WEB 1",
    sigla: "DW1A3",
    prof: "Josceli",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 6,
    nome: "Estatistica e probabilidade",
    sigla: "ESPA3",
    prof: "Maria Eduarda",
    aulasSemestre: 19,
    concluidos: 18
  }],
  "2 semestre": [{
    codigo: 1,
    nome: "Desenvolvimento WEB 1",
    sigla: "DW1A3",
    prof: "Josceli",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 2,
    nome: "Estatistica e probabilidade",
    sigla: "ESPA3",
    prof: "Maria Eduarda",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 3,
    nome: "Desenvolvimento WEB 1",
    sigla: "DW1A3",
    prof: "Josceli",
    aulasSemestre: 19,
    concluidos: 18
  }]
};

const painel = document.querySelector("#painel");
const painelPopup = document.querySelector("#semestre-lista");
let semestre = "1 semestre";

/* Funções */
/* Troca o semestre e remonta o painel */
const trocarSemestre = (s) => {
  if (disc[s])
    semestre = s;
};

/* Constrói o card */
const displayDiscCards = (d) => {
  let card = document.createElement("div");
  let label = document.createElement("div");
  let icon = document.createElement("img");
  let titulo = document.createElement("h4");
  let sigla = document.createElement("h3");
  let prof = document.createElement("h4");
  let aulas = document.createElement("p");

  titulo.innerText = d.nome;
  sigla.innerText = d.sigla;
  prof.innerText = d.prof;

  aulas.innerHTML = "<span>Aulas totais:";
  aulas.innerHTML += "<span>" + d.aulasSemestre;
  aulas.innerHTML += "<span>Aulas restantes:";
  aulas.innerHTML += "<span>" + (d.aulasSemestre - d.concluidos);

  icon.setAttribute("src", "../media/school-hat.svg");
  label.appendChild(icon);
  label.appendChild(sigla);

  card.appendChild(label);
  card.appendChild(titulo);
  card.appendChild(prof);
  card.appendChild(aulas);

  card.classList.add("disc-card");
  icon.classList.add("icon");

  painel.appendChild(card);
};

/* Mapeia o vetor apropriado com a funcão de construir cards */
const displayPainel = () => {
  painel.innerHTML = null;
  disc[semestre].map(displayDiscCards);
};

/* Chamada inicial da funcão anterior, para que a página se
 * abra completa */
displayPainel();

/* Incluir labels no popup de filtragem de semestre */
const popupAppendText = (texto) => {
  const div = document.createElement("div");
  div.innerText = texto;

  div.addEventListener("click", (e) => {
    semestre = e.target.innerHTML;
    displayPainel();
  });
  painelPopup.appendChild(div);
};


for (const [sem, _] of Object.entries(disc))
  popupAppendText(sem);
