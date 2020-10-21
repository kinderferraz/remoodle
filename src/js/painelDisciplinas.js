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
    prof: "Claudia",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 3,
    nome: "Engenharia de Software 3",
    sigla: "ES3A3",
    prof: "Cléber",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 4,
    nome: "Linguagem de Programação 1",
    sigla: "LP1A3",
    prof: "Antonio",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 5,
    nome: "Banco de Dados 2",
    sigla: "DB2A3",
    prof: "Maria",
    aulasSemestre: 19,
    concluidos: 18
  },{
    codigo: 6,
    nome: "Redes",
    sigla: "REDA3",
    prof: "Ana",
    aulasSemestre: 19,
    concluidos: 18
  }],
  "1 semestre": [{
    codigo: 1,
    nome: "Estruturas de Dados",
    sigla: "EDDA2",
    prof: "Tomé",
    aulasSemestre: 19,
    concluidos: 19
  },{
    codigo: 2,
    nome: "Engenharia de Software 2",
    sigla: "Majê",
    prof: "Maria Eduarda",
    aulasSemestre: 19,
    concluidos: 19
  },{
    codigo: 3,
    nome: "Banco de dados 1",
    sigla: "DB1A2",
    prof: "Fernando",
    aulasSemestre: 19,
    concluidos: 19
  }]
};

const painel = document.querySelector("#painel");
const painelPopup = document.querySelector("#semestre-lista");
let semestre = "2 semestre";

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
  card.addEventListener("click", (e) => {
    const target = e.currentTarget;
    let sigla = target.querySelector("h3");
    sigla = sigla.innerText;
    if (sigla == "DW1A3")
      window.open(sigla + ".html", "_self");
    else
      window.open("dummy.html", "_self");
  });

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
