import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from './generic-form-validator';
import { Usuario } from './model/usuario';
import { CadastroFormService } from './services/cadastro-form.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  usuario: Usuario;
  cadastroForm: FormGroup;
  formResult: string = '';
  mask = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(public formService: CadastroFormService) {
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.formService.construirFormulario();
    this.cadastroForm = this.formService.form;

    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres',
      },
      cpf: {
        required: 'Informe o CPF.',
        cpf: 'CPF em formato inválido!',
      },
      email: {
        required: ' informe o e-mail',
        email: 'Email inválido',
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: ' A senha deve possuir entre 6 e 15 caracteres',
      },
      senhaConfirmacao: {
        required: 'Repita a senha',
        rangeLength: ' A senha deve possuir entre 6 e 15 caracteres',
        equalTo: ' As senhas não conferem',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages)
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(
        this.cadastroForm
      );
    });
  }
  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    } else {
      this.formResult = 'não submeteu!';
    }
  }
}