import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLoadComponent } from './botao-load.component';

describe('BotaoLoadComponent', () => {
  let component: BotaoLoadComponent;
  let fixture: ComponentFixture<BotaoLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
