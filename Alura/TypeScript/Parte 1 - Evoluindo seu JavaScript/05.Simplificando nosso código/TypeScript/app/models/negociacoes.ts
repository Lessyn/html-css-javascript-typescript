import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { //Utilizando a função Readonly, o problema da lista é resolvido e essa, não é modificada na classe negociacao-controller.
        return this.negociacoes;
    }

}