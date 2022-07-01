export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes]; //Essas redicências ajuda a criar uma nova lista na qual será uma referência a lista encapsulada. Nisso a lista a ser apagada será a nova lista criada, tornando essa uma nova referência. Spread Operator. 
    }
}
