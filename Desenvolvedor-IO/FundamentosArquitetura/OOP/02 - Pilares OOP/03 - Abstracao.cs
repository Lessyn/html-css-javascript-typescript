namespace OOP
{
    public abstract class Eletrodomestico
    {
        private readonly string _nome;
        private readonly int _voltagem;
        protected Eletrodomestico(string nome, int voltagem) /* Conceito é, oferecer um conjunto de estado e comportamento que abstrae uma
                                                              certa especialização. Classe que herdam de classe abstrada, fazem por conta 
            prórpia a especialização*/
        {
            _nome = nome;
            _voltagem = voltagem;
        }

        public abstract void Ligar();
        public abstract void Desligar();

        public virtual void Testar()
        {
            // teste do equipamento
        }
    }
}