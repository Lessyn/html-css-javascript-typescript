class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }//Explicação com relação a método e função. Se é criada uma "função" dentro de uma classe, a gente a chama de método. Mas se essa "função" é criada fora da classe, ela continuará sendo chamada de função.
    get volume() {

        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}