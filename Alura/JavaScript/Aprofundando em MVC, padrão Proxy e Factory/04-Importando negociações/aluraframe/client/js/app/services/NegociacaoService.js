class NegociacaoService {

    obterNegociacoesDaSemana(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            /*Estados de uma requisição AJAX:
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição concluída e a resposta esta pronta*/

            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                }
                else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações.', null);
                }
            }
        };

        xhr.send()
    }
}