import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetalhesComponent } from './personagem-detalhes.component';

describe('PersonagemDetalhesComponent', () => {
  let component: PersonagemDetalhesComponent;
  let fixture: ComponentFixture<PersonagemDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
