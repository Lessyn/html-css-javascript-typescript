import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'IM-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _formBuilder: FormBuilder){}

  productForm: FormGroup;

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      cdBarras: ['', Validators.required],
      nome: ['', Validators.required],
      preco: ['',Validators.required],
      imagem: ['', Validators.required]
  });
}

  cadastro() {
    const codigoBarras = this.productForm.get('CDBarras')?.value;
    const nome = this.productForm.get('Nome')?.value;
    const preco = this.productForm.get('Preco')?.value;
    const base64 = this.productForm.get('imagem')?.value; 

    this._authService.InsereProduto(codigoBarras, nome, preco, base64)
      .subscribe((res:ProductModel) => {
        const cdBarras = res.codigoBarras;
        const nome = res.nome;
        const preco = res.preco;
        const base64 = res.base64;
        console.log(cdBarras);
        console.log(nome);
        console.log(preco);
        console.log(base64);

      })
    }
  }

