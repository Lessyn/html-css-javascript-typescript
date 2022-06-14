/* Ser autenticável é ter o método autenticar.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    }
}