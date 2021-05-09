import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasferenciaContratosComponent } from './trasferencia-contratos.component';

describe('TrasferenciaContratosComponent', () => {
  let component: TrasferenciaContratosComponent;
  let fixture: ComponentFixture<TrasferenciaContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasferenciaContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasferenciaContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
