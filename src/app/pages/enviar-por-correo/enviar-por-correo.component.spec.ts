import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarPorCorreoComponent } from './enviar-por-correo.component';

describe('EnviarPorCorreoComponent', () => {
  let component: EnviarPorCorreoComponent;
  let fixture: ComponentFixture<EnviarPorCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarPorCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarPorCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
