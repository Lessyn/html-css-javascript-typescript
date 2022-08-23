import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemIndividualComponent } from './personagem-individual.component';

describe('PersonagemIndividualComponent', () => {
  let component: PersonagemIndividualComponent;
  let fixture: ComponentFixture<PersonagemIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
