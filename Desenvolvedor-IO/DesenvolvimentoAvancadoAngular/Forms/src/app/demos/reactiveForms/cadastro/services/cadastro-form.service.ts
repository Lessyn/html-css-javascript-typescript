import { Injectable } from '@angular/core';
import {  
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Injectable()
export class CadastroFormService {
  form: FormGroup;

  // get senhaControl(): AbstractControl {
  //   return this.form.get('senha');
  // }

  // get senhaConfirmacaoControl(): AbstractControl {
  //   return this.form.get('senhaConfirmacao');
  // }

  // get senhasIguais(): boolean {
  //   return this.senhaControl.value  this.senhaConfirmacaoControl.value;
  // }

  constructor(private _fb: FormBuilder) {}

  construirFormulario(): void {
    let senha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);
    let senhaConfirmacao = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(senha),
    ]);

    this.form = this._fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150),
        ],
      ],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirmacao,
    });
  }
}