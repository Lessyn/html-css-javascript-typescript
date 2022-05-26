var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form.
    var paciente = obtemPacienteDoFormulario(form);

    //Criando a tr e td do paciente.
    var pacienteTr = montarTr(paciente);

    //Adicionando o paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

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