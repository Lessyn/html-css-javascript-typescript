namespace OOP
{
    // Poli-morfismo - Muitos comportamentos. 
    public class CafeteiraEspressa : Eletrodomestico
    {
        public CafeteiraEspressa(string nome, int voltagem) /*Essa seria uma forma de passar os parametros da classe herdada Eletrodomestico*/
            : base(nome, voltagem) { }

        public CafeteiraEspressa()
            : base("Padrao", 220) {  }/*E essa seria uma outra forma de herdar da classe*/

        private static void AquecerAgua() { } 

        private static void MoerGraos() { }

        public void PrepararCafe()
        {
            Testar();
            AquecerAgua();
            MoerGraos();
            // ETC...
        }

        public override void Testar() /*No polimorfismo, sou obrigado a utizar o método override para sobrescrever ao da classe Eletrodomestico*/
        {
            // teste de cafeteira
        }

        public override void Ligar() /*No polimorfismo, sou obrigado a utizar o método override para sobrescrever ao da classe Eletrodomestico*/
        {
            // Verificar recipiente de agua
        }

        public override void Desligar() /*No polimorfismo, sou obrigado a utizar o método override para sobrescrever ao da classe Eletrodomestico*/
        {
            // Resfriar aquecedor
        }
    }
}