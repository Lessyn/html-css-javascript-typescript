var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event) {

    event.target.parentNode.classList.add("fadeOut");
    if (event.target.tagName == 'TD'){
        setTimeout(function () {
            event.target.parentNode.remove();// Remoção nessa linha é realizada instantâneamente. Por isso foi adicionado um tempo de 500 para a remoção ser realizada gradualmente.   
        }, 500)
    }

    /*   var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;  // TR = paciente = remover. 
    paiDoAlvo.remove(); */ //Essas linhas seriam um outra forma de realizar o processo de exclusão. 
});

/*var pacientes = document.querySelectorAll(".paciente"); 
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        console.log("Fui clicado com um duplo click")
        this.remove();
    }); */ //Nesse foreach, está sendo removido os pacientes que já consta na tabela. Nesse caso, pacientes adicionados posteriormente, esses não são possíveis fazer a exclusão. 