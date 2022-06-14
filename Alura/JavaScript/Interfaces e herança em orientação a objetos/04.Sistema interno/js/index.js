import { Cliente } from "./Cliente.js";
import { Gerente} from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Funcionarios } from "./Funcionarios/Funcionarios.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, "04631004681");
diretor.cadastrarSenha ("123456789");
const gerente = new Gerente("Ricardo", 5000, "12378945601");
gerente.cadastrarSenha ("123");
const cliente = new Cliente("Bruno", "01401401414", "987654321");
cliente.autenticar ("987654321");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "987654321")
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);