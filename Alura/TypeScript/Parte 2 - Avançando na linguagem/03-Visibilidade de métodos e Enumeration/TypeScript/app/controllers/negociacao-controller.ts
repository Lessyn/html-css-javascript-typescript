import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;

    constructor() {

        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Negociações só podem ser criadas em dias úteis!")
            return;
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }
    }

    private ehDiaUtil(data: Date) {
        return ((data.getDay() > this.DOMINGO) && (data.getDay() < this.SABADO));//Os dias da semana são representados por número que vão de 0 (domingo) a 6 (sábado).
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g; //Expressão regular. Nesse caso a letra "g" significa "global", na qual serão encontrados todas as ocorrências que surgirem.
        const date = new Date(this.inputData.value.replace(exp, ',')); // O replace vai encontrar todos os "-" ífens do exp e substituí-los por "," vírgulas.
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}