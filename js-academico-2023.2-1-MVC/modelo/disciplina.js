export class Disciplina{
    constructor(codigo, nome){
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get codigo(){
        return this._codigo;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    get alunos(){
        return this._alunos;
    }

    addAluno(novoAluno){
        this._alunos.add(novoAluno);
        
    }

    removeAluno(alunoAserRemovido){
        this._alunos.remove(alunoAserRemovido)
    }

}