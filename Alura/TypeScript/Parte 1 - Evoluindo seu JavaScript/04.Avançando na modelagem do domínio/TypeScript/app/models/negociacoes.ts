import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return [...this.negociacoes]; //Essas redicências ajuda a criar uma nova lista na qual será uma referência a lista encapsulada. Nisso a lista a ser apagada será a nova lista criada, tornando essa uma nova referência. Spread Operator. 
    }

}