export class Negociacao {


    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) {

    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return (this.quantidade * this.valor);
    }

    public criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g; //Expressão regular. Nesse caso a letra "g" significa "global", na qual serão encontrados todas as ocorrências que surgirem.
        const date = new Date(dataString.replace(exp, ',')); // O replace vai encontrar todos os "-" ífens do exp e substituí-los por "," vírgulas.
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}