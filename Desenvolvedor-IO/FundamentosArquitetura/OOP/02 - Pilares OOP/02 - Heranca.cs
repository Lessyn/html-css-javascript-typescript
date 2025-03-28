﻿using System;

namespace OOP
{
    public class Funcionario : Pessoa
    {
        public DateTime DataAdmissao { get; set; } /*Herança: Quando uma clase estende de outra como nesse exemplo, 
                                                     funcionario estendendo de pessoa. Sempre lembrar. FUNCIONÁRIO ("É UM(A)") PESSOA*/
        public string Registro { get; set; }
    }

    public class Processo
    {
        public void Execucao()
        {
            var funcionario = new Funcionario()
            {
                Nome = "João da Silva",
                DataNascimento = Convert.ToDateTime("1990/01/01"),
                DataAdmissao = DateTime.Now,
                Registro = "0123456",
            };

            funcionario.CalcularIdade();
        }
    }
}