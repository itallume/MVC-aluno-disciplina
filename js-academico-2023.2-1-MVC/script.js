import {AlunoControlador} from "./controlador/aluno_controlador.js"
const controladorAluno = new AlunoControlador();

if(localStorage.length > 0){
    const listaAlunosElemento = document.querySelector("#listaAlunos");
    controladorAluno.listarAlunos().forEach(aluno => controladorAluno.inserirAlunoNoHtml(aluno, listaAlunosElemento));
}

const btnCadAluno = document.querySelector("#cadAluno");
btnCadAluno.addEventListener("click", event => {
    controladorAluno.inserir()
})
