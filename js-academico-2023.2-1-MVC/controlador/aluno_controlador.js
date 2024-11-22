import {AlunoService} from "../servico/aluno_service.js"
export class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        try {
            const nomeElemento = document.querySelector("#nome");
            const idadeElemento = document.querySelector("#idade");
            const matriculoElemento = document.querySelector("#matricula");
            const alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),
            matriculoElemento.value);
            const listaAlunosElemento = document.querySelector("#listaAlunos");
            if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
            }
        } catch (error) {
            alert("Aluno já cadastrado!")
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    listarAlunos(){
        return this.servico.listarAlunos();
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.servico.listarMenoresIdade();
        alunosMenores.forEach(menor => this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }

    inserirAlunoNaDisciplina(){
        const materiaAluno = document.querySelector("#matAluno");
        const codMateria = document.querySelector("#codDisciplna");
        
    }

    pesquisarPorMatricula(matricula) {
        return this.servico.pesquisarPorMatricula(matricula);
    }

}
