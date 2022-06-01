var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form.
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErros(erros);
        return;
    }

    //Chamando a função, onde é adicionando o paciente na tabela.
    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

//Função para adicionar o paciente na tabela;
function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErros(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(formulario) {
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if ((paciente.nome.length == 0) && (paciente.peso.length == 0) && (paciente.altura.length == 0) && (paciente.gordura.length == 0)) {
        erros.push("Preencha o(s) seguinte(s) campo(s) abaixo por favor!")
    }

    if (paciente.nome.length == 0) {
        erros.push("O campo nome não pode ficar em branco!");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ficar em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ficar em branco");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura do paciente não pode ficar em branco!")
    }

    return erros;
}

    //Forma "incorreta" em realizar uma inserção em uma Td. A forma correta se encontra na criação da função "montarTd" na linha 46.

/* var nomeTd = document.createElement("td");
nomeTd.classList.add("info.nome");
nomeTd.textContent = paciente.nome

var pesoTd = document.createElement("td");
pesoTd.classList.add("info.peso");
pesoTd.textContent = paciente.peso

var alturaTd = document.createElement("td");
alturaTd.classList.add("info.altura");
alturaTd.textContent = paciente.altura;

var gorduraTd = document.createElement("td");
gorduraTd.classList.add("info.gordura");
gorduraTd.textContent = paciente.gordura;

var imcTd = document.createElement("td");
imcTd.classList.add("info.imc");
imcTd.textContent = paciente.imc; */


    //Essas linhas foram incluídas junto ao pacienteTr.appendChild logo na linha 36;

/* var nomeTd = montarTd(paciente.nome, "info-nome");
var pesoTd = montarTd(paciente.peso, "info-peso");
var alturaTd = montarTd(paciente.altura, "info-altura");
var gorduraTd = montarTd(paciente.gordura, "info-gordura");
var imcTd = montarTd(paciente.imc, "info-imc"); */