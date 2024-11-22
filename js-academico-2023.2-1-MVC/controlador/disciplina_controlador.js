import { Aluno } from "../modelo/aluno.js";
import {DisciplinaService} from "../servico/disciplina_service.js"
export class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        try {
            const nomeElemento = document.querySelector("#nome");
            const codigoElemento = document.querySelector("#codigo");
            const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);
            const listaAlunosElemento = document.querySelector("#listaDisciplinas");
            if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaAlunosElemento);
            }
            
        } catch (error) {
            alert("disciplina já cadastrada!")
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
    
    inserirAlunoNaDisciplina(matriculaAluno, codDisciplina){
        const alunoStringJson = localStorage.getItem(matriculaAluno);
        if(!alunoStringJson){
            throw Error("aluno não cadastrado!");
        }
        const alunoJson = JSON.parse(alunoStringJson);
        const aluno = new Aluno(alunoJson.nome, alunoJson.idade, alunoJson.matricula);
        this.servico.inserirAlunoNaDisciplina(aluno, codDisciplina);
        
    }

}