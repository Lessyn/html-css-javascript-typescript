import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

export class Cliente extends SistemaAutenticacao{
 
    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf, senha){
        super(nome, cpf, senha);
        /*this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;*/ 
    }
    autenticar(senha) {
        return true;
    }
}