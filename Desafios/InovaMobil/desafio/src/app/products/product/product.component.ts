import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { SignInModel } from 'src/app/home/signin/model/signin.model';
import { ProductModel } from './product.model';

@Component({
  selector: 'IM-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _formBuilder: FormBuilder){}
             
              storage: WindowLocalStorage;
              productForm: FormGroup;
  

  ngOnInit(): void {
    this.construirForm()
}

  cadastro() {
    const codigoBarras = this.productForm.get('CDBarras')?.value;
    const nome = this.productForm.get('Nome')?.value;
    const preco = this.productForm.get('Preco')?.value;
    const base64 = this.productForm.get('imagem')?.value; 

    this._authService.InsereProduto(codigoBarras, nome, preco, base64)
      .subscribe((res:ProductModel) => {
        const acao = res.acao;
        const nome = res.nome
        const sucesso = res.sucesso;
        console.log(res);               
        console.log(`A ${acao} de ${nome}, foi realizada com ${sucesso}`)              

      });
    }

    construirForm(){
      this.productForm = this._formBuilder.group({
        CDBarras: ['', Validators.required],
        Nome: ['', Validators.required],
        Preco: ['',Validators.required],
        Imagem: ['', Validators.required]
    });

    this.productForm.markAllAsTouched()
    }
  }
  