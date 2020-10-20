/* Aqui está o código javascritp que monta a barra lateral.
 * A lógica é semelhante à usada para o painel de disciplinas,
 * com alguns filtros um pouco mais elaborados. */

const filtros = {
  TUDO: "Tudo",
  ATRASADO: "Atrasado",
  NO_PRAZO: "No prazo"
};
let filtroTarefas = filtros.TUDO;

/* Este objeto é usado para formatar as datas inseridas no badge */
const options = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

/* O objeto no DOM onde os bagdes serão inseridos */
const sidebarTarefas = document.querySelector("#tarefas");
const popupTarefas = document.querySelector("#tarefa-filtros");

/* Os dados para montar o badge */
const entregas = [{
  nome: "IPv4",
  disc: 1,
  prazo: new Date(2020, 9, 14, 00, 00),
  envio: false
}, {
  nome: "CSS -- Grid",
  disc: 1,
  prazo: new Date(2020, 10, 14, 00, 00),
  envio: true
}, {
  nome: "Functions e Triggers",
  disc: 1,
  prazo: new Date(2020, 10, 14, 13, 00),
  envio: false
}, {
  nome: "Avaliação",
  disc: 1,
  prazo: new Date(2020, 10, 14, 23, 59),
  envio: false
}];

/* Atualizar o valor do filtro de tarefas e remontar a lista */
const atualizarFiltro = (e) => {
  const novoFiltro = e.target.innerHTML;

  if ("Tudo" === novoFiltro)
    filtroTarefas = filtros.TUDO;
  else if ("Atrasado" === novoFiltro)
    filtroTarefas = filtros.ATRASADO;
  else if ("No prazo" == novoFiltro)
    filtroTarefas = filtros.NO_PRAZO;

  displayBarraTarefas();
};

/* Montar o popup com filtros e adicionar eventListeners */
const appendToPopUp = (texto) => {
  const div = document.createElement("div");
  div.innerText = texto;

  div.addEventListener("click", atualizarFiltro);
  popupTarefas.appendChild(div);
};

/* Esta função é passada como filtro sobre o vetor de tarefas:
 * Seleciona as tarefas de acordo com o critério escolhido pelo usuário:
 *   todas: nao filtra;
 *   atrasado: retorna aquelas com prazo anterior a data atual
               E nao enviadas;
 *   no prazo: retorna as tarefas que ainda podem ser entregadas ou alteradas.
 */
const tarefaFiltro = (t) => {
  if (filtroTarefas == filtros.ATRASADO)
    return t.prazo.getTime() < Date.now() && !t.envio;

  else if (filtroTarefas == filtros.NO_PRAZO)
    return t.prazo.getTime() >= Date.now();

  else
    return true;
};

/* Monta um badge, com o icone e a classe apropriada,
 * coloca-lo como elemento filho do elemento DOM #tarefas. */
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
    icon.setAttribute("src", "../media/alarm-check.svg");
  } else if (t.prazo.getTime() < Date.now()) {
    badge.classList.add("atrasado");
    icon.setAttribute("src", "../media/alarm-off.svg");
  } else
    icon.setAttribute("src", "../media/alarm-add.svg");


  icon.setAttribute("class", "icon");

  labels.appendChild(title);
  labels.appendChild(data);

  badge.appendChild(icon);
  badge.appendChild(labels);

  sidebarTarefas.appendChild(badge);
};

/* Limpa a barra lateral e mapeia a função de mostrar os badges sobre
 * o vetor de dados. */
const displayBarraTarefas = () => {
  sidebarTarefas.innerHTML = null;
  entregas.filter(tarefaFiltro).map(displayBadgesTarefas);
};

/* De fato incluir o texto no popup */
for (const [_, val] of Object.entries(filtros))
  appendToPopUp(val);


/* De fato inserir os elementos na lista de entregas, antes de abrir
 * a página. */
displayBarraTarefas();
