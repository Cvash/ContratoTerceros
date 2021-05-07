import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPeriodoComponent } from './configuracion-periodo.component';

describe('ConfiguracionPeriodoComponent', () => {
  let component: ConfiguracionPeriodoComponent;
  let fixture: ComponentFixture<ConfiguracionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
