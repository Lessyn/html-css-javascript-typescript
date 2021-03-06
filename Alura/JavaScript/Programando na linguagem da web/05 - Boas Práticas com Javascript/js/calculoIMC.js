var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 3.0) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaIMC(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

/*titulo.addEventListener("click", function(){
    console.log("OLha só, posso chamar uma função anônima.");
});

function mostraMensagem(){
    console.log("Olá, eu fui clicado!");
}*/ //Tipos de funções na quais o javascript possa "escutar" o movimento de click do usuário. Ae temos duas opções, uma é utilizando a função anônima ou passando a função "mostraMensagem" como parâmetros em .addEventListenner.