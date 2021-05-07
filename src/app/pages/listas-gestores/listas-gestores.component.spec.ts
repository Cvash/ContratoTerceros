import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasGestoresComponent } from './listas-gestores.component';

describe('ListasGestoresComponent', () => {
  let component: ListasGestoresComponent;
  let fixture: ComponentFixture<ListasGestoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasGestoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasGestoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
