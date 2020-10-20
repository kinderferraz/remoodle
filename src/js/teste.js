/* O painel de cursos */
const disc = {
  "1 semestre": [{
    "codigo": 1,
    "nome": "Desenvolvimento WEB 1",
    "sigla": "DW1A3",
    "prof": "Josceli"
  },{
    "codigo": 2,
    "nome": "Estatistica e probabilidade",
    "sigla": "ESPA3",
    "prof": "Maria Eduarda"
  },{
    "codigo": 3,
    "nome": "Desenvolvimento WEB 1",
    "sigla": "DW1A3",
    "prof": "Josceli"
  },{
    "codigo": 4,
    "nome": "Estatistica e probabilidade",
    "sigla": "ESPA3",
    "prof": "Maria Eduarda"
  },{
    "codigo": 5,
    "nome": "Desenvolvimento WEB 1",
    "sigla": "DW1A3",
    "prof": "Josceli"
  },{
    "codigo": 6,
    "nome": "Estatistica e probabilidade",
    "sigla": "ESPA3",
    "prof": "Maria Eduarda"
  }]
};

const painel = document.querySelector("#painel");
let semestre = "1 semestre";

const displayDiscCards = (d) => {
  let card = document.createElement("div");
  let label = document.createElement("div");
  let titulo = document.createElement("h4");
  let sigla = document.createElement("h3");
  let prof = document.createElement("h4");
  let icon = document.createElement("img");

  titulo.innerText = d.nome;
  sigla.innerText = d.sigla;
  prof.innerText = d.prof;

  icon.setAttribute("src", "../media/school-hat.png");

  label.appendChild(icon);
  label.appendChild(sigla);

  card.appendChild(label);
  card.appendChild(titulo);
  card.appendChild(prof);

  icon.classList.add("icon");
  card.classList.add("disc-card");

  painel.appendChild(card);
};
disc[semestre].map(displayDiscCards);

/* As tarefas: */
//harcode enum
const filtros = {
  TUDO: "tudo",
  ATRASADO: "atrasado",
  NO_PRAZO: "prazo"
};
let filtroTarefas = filtros.TUDO;
const options = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

const sidebarTarefas = document.querySelector("#tarefas");
const entregas = [{
  nome: "IPv4",
  disc: 1,
  prazo: new Date(2020, 9, 14, 12, 00),
  envio: false
}, {
  nome: "CSS -- Grid",
  disc: 1,
  prazo: new Date(2020, 9, 14, 12, 00),
  envio: true
}, {
  nome: "Functions e Triggers",
  disc: 1,
  prazo: new Date(2020, 9, 14, 12, 00),
  envio: false
}, {
  nome: "Avaliação",
  disc: 1,
  prazo: new Date(2020, 10, 14, 12, 00),
  envio: false
}];

const displayBadgesTarefas = (t) => {
  const badge = document.createElement("div");
  const title = document.createElement("h4");
  const icon = document.createElement("img");
  const labels = document.createElement("div");
  const data = document.createElement("p");
  const disc = document.createElement("p");

  let date = t.prazo.toLocaleDateString("pt-BR", options);
  badge.setAttribute("class", "badge");

  title.innerText = t.nome;
  data.innerText = date;

  if (t.envio) {
    badge.classList.add("enviado");
    icon.setAttribute("src", "../media/alarm-check.png");
  } else if (t.prazo.getTime() < Date.now()) {
    badge.classList.add("atrasado");
    icon.setAttribute("src", "../media/alarm-off.png");
  } else
    icon.setAttribute("src", "../media/alarm-add.png");


  icon.setAttribute("class", "icon");

  labels.appendChild(title);
  labels.appendChild(data);

  badge.appendChild(icon);
  badge.appendChild(labels);

  sidebarTarefas.appendChild(badge);
};

entregas.map(displayBadgesTarefas);
