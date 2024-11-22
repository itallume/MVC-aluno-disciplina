import { AlunoControlador } from "./controlador/aluno_controlador.js";
import {DisciplinaControlador} from "./controlador/disciplina_controlador.js"


const controladorDisciplina = new DisciplinaControlador();

const btnCadDisciplina = document.querySelector("#cadDisciplina");

btnCadDisciplina.addEventListener("click", event => {
    controladorDisciplina.inserir();
})

const btnAdcAluno = document.querySelector("#adcAluno");
btnAdcAluno.addEventListener("click", event => {
    const matriculaAluno = document.querySelector("#matAluno");
    const codDisciplina = document.querySelector("#codDisciplina");
    controladorDisciplina.inserirAlunoNaDisciplina(matriculaAluno.value, codDisciplina.value)

})