using System;

namespace OOP
{
    public class Pessoa
    {
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; } //Definição de estado, quando já se tem as informações.

        public int CalcularIdade()
        {
            var dataAtual = DateTime.Now;
            var idade = dataAtual.Year - DataNascimento.Year;

            if (dataAtual < DataNascimento.AddYears(idade)) idade--; /*Definição de comportamento: Quando tais informações que já estão
                                                                    obtidas, geram um nova informação, como: Gerando a idade da pessoa.*/

            return idade;
        }
    }
}