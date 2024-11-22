import {DisciplinaRepositorio} from "../repositorio/disciplina_repositorio.js";
import {Disciplina} from "../modelo/disciplina.js"
export class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(cod, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(cod);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(cod, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listarDisciplina() {
        return this.repositorio.listar();
    }

    atualizarNomeDisciplina(cod, nome){
        const disciplinaObj = this.pesquisarPorCodigo(cod);
        if (disciplinaObj.length > 0){
            disciplinaObj[0].nome = nome;
        }
    }

    inserirAlunoNaDisciplina(aluno, cod){
        const disciplinaObj = this.pesquisarPorCodigo(cod);
        if (disciplinaObj.length > 0){
            disciplinaObj[0].addAluno(aluno);
            console.log(disciplinaObj[0])
        }
    }
    
}
