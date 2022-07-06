export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return (this.quantidade * this.valor);
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g; //Expressão regular. Nesse caso a letra "g" significa "global", na qual serão encontrados todas as ocorrências que surgirem.
        const date = new Date(dataString.replace(exp, ',')); // O replace vai encontrar todos os "-" ífens do exp e substituí-los por "," vírgulas.
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
