import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { ProductsModel } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'IM-product',
  templateUrl: './productInsert.component.html',
  styleUrls: ['./productInsert.component.css'],
})
export class ProductInsertComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _productsService: ProductsService
  ) {}

  storage: WindowLocalStorage;
  productForm: FormGroup;

  ngOnInit(): void {
    this.construirForm();
  }

  addProducts() {
    const produto = this.productForm.getRawValue() as ProductsModel;

    this._productsService.addProducts(produto)
    .pipe(finalize(()=>  this._productsService.loadProducts().subscribe(res => console.log(res))))
    .subscribe(
      (res: any) => {
        const acao = res.acao;

        if (res.sucesso) {
          console.log(res);
          console.log(`A ${acao}, foi realizada com sucesso`);
        }
      },
      (err) => console.log(err)
    );

   
  }

  construirForm() {
    this.productForm = this._formBuilder.group({
      codigoBarras: ['', Validators.required],
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      base64: ['', Validators.required],
    });

    this.productForm.markAllAsTouched();
  }
}
