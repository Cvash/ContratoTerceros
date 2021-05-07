import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBaseHistoricaComponent } from './ver-base-historica.component';

describe('VerBaseHistoricaComponent', () => {
  let component: VerBaseHistoricaComponent;
  let fixture: ComponentFixture<VerBaseHistoricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBaseHistoricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBaseHistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
