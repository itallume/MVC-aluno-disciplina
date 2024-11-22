import {Aluno} from "../modelo/aluno.js"
export class AlunoRepositorio {

    constructor() {
    }

    inserir(aluno) {
        const alunoJson = {nome: aluno.nome, idade: aluno.idade, matricula: aluno.matricula};
        localStorage.setItem(aluno.matricula, JSON.stringify(alunoJson));
    }

    remover(matricula) {
        localStorage.removeItem(matricula);
    }

    listar() {
        const alunos = [];
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            const alunoJson = JSON.parse(value);
            const aluno = new Aluno(alunoJson.nome, alunoJson.idade, alunoJson.matricula);
            alunos.push(aluno)
          }
        return alunos;
    }

    setAlunos(listaDeAlunos){
        this._alunos = listaDeAlunos;
    }
}
