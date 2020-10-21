/* Este objeto é usado para formatar as datas*/
const options = {
  month: 'long',
  day: 'numeric'
};

const discInfo = {
  prof: "Josceli Tenório",
  contato: "josceli.tenorio@ifsp.edu.br",
  titulo: "Desenvolvimento Web 1",
  sigla: "DW1A3",
  ementa: "Esta disciplina apresenta as principais tecnologias\
 destinadas ao desenvolvimento de interfaces com o usuário para\
 aplicações Web. São apresentadas as principais linguagens destinadas\
 a este fim, assim como o conjunto de técnicas para a construção de\
 interfaces com o usuário eficientes e eficazes, seguindo o conjunto\
 de melhores práticas.",
  documentos: {
    "Plano de aulas": "../media/Plano_de_Ensino.pdf"
  },
  aulas: {
    1: {
      Nome: "Apresentação",
      data: new Date(2020, 07, 7),
      documentos: {
        "Apresentação": "../media/apresentação.docx",
        "Introdução": "../media/aula1.pdf"
      }
    },
    2: {
      Nome: "Git e Desenvolvimento Web",
      data: new Date(2020, 07, 14),
      documentos: {
        "Desenvolvimento Web": "../media/aula2.pdf",
        "Introdução ao Git": "../media/git_intro.pdf"
      }
    },
    3: {
      Nome: "HTML",
      data: new Date(2020, 07, 21),
      documentos: {
        "HTML": "../media/html.pdf",
        "Exercicio 1": "../media/exercicio1.xls"
      },
      exercicios: {
        "Exercicio 1": "../html/entrega.html",
      }
    },
    4: {
      data: new Date(2020, 07, 28),
      Nome: "Links e Listas",
      documentos: {
        "HTML -- Links e Listas": "../media/html2.txt"
      },
      exercicios: {
        "Exercicio 1": "../html/entrega.html",
      }
    },
    5: {
      Nome: "Tabela e Formulário",
      data: new Date(2020, 08, 4),
      documentos: {
        "HTML -- Tabelas e Formulários": "../media/html3.pdf"
      },
      exercicios: {
        "Exercicio 1": "../html/entrega.html",
      }
  }
  }
};

const corpo = document.querySelector("#corpo");
const aulas = document.querySelector("#aulas");

const getIconByExtension = (e) => {
  let icon = document.createElement("img");
  icon.classList.add("icon");
  if (e === "doc" || e === "docx")
    icon.setAttribute("src", "../media/file-word.svg");
  else if (e === "xls" || e === "xlsx" || e === "csv")
    icon.setAttribute("src", "../media/file-excel.svg");
  else if (e === "pdf" )
    icon.setAttribute("src", "../media/file-pdf.svg");
  else
    icon.setAttribute("src", "../media/file.svg");
  return icon;
};

const inserirDocumentos = (container, docList) => {
  let icon;

  const titulo = document.createElement("h5");
  titulo.innerText = "Documentos";
  container.appendChild(titulo);

  Object.keys(docList).map((key) => {
    const docCard = document.createElement("div");
    docCard.classList.add("doc-card");
    const path = docList[key];
    const docTitulo = document.createElement("h5");
    docTitulo.innerText = key;

    const ext = path.split(".").pop();
    icon = getIconByExtension(ext);

    docCard.appendChild(icon);
    docCard.appendChild(docTitulo);
    container.appendChild(docCard);
  });


};

const inserirAulas = (aulaNum) => {
  const aulasInfo = discInfo.aulas;

  const container = document.createElement("div");
  const titulo = document.createElement("h3");
  const data = document.createElement("p");
  const documentos = document.createElement("div");
  const tarefas = document.createElement("div");


  titulo.innerHTML = "Aula " +  aulaNum + ": " + aulasInfo[aulaNum].Nome;
  data.innerText = aulasInfo[aulaNum].data.toLocaleDateString("pt-BR", options);

  container.classList.add("container-aula");
  documentos.classList.add("docs-aula");

  inserirDocumentos(documentos, aulasInfo[aulaNum].documentos);

  container.appendChild(titulo);
  container.appendChild(data);
  container.appendChild(documentos);

  aulas.appendChild(container);
};

const displayDisc = (d) => {
  const containerDisc = document.createElement("div");
  const containerDocs = document.createElement("div");
  const containerInfo = document.createElement("div");
  const containerTitulo = document.createElement("div");
  const ementaTitulo = document.createElement("h5");
  const ementaTexto = document.createElement("p");
  const contato = document.createElement("h5");
  const titulo = document.createElement("h2");
  const sigla = document.createElement("h3");
  const prof = document.createElement("h3");

  titulo.innerText = d.titulo;
  sigla.innerText = d.sigla;
  prof.innerText = d.prof;
  contato.innerText = d.contato;
  ementaTitulo.innerText = "Ementa";
  ementaTexto.innerText = d.ementa;

  containerTitulo.appendChild(titulo);
  containerTitulo.appendChild(sigla);

  containerInfo.appendChild(prof);
  containerInfo.appendChild(contato);
  containerInfo.appendChild(ementaTitulo);
  containerInfo.appendChild(ementaTexto);

  containerDisc.classList.add("container");
  containerInfo.classList.add("container-info");
  containerDocs.classList.add("container-docs");
  containerTitulo.classList.add("container-titulo");

  containerDisc.appendChild(containerTitulo);
  containerDisc.appendChild(containerInfo);
  containerDisc.appendChild(containerDocs);
  inserirDocumentos(containerDocs, d.documentos);
  corpo.insertBefore(containerDisc, aulas);
  Object.keys(d.aulas).map(inserirAulas);
};

displayDisc(discInfo);
