export class NegociacoesView {
    template(): string {
        return `
        <table class= "table table-hover table-bordered"
             <tread>
                   <tr>
                      <th>DATA</th>
                      <th>QUANTIDADE</th>
                      <th>VALOR</th>        
                  </tr>
             </tread>
             <Tbody>
             </Tbody>
        
        </table>`;
    }
}