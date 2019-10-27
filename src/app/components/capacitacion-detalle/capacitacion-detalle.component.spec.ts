import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionDetalleComponent } from './capacitacion-detalle.component';

describe('CapacitacionDetalleComponent', () => {
  let component: CapacitacionDetalleComponent;
  let fixture: ComponentFixture<CapacitacionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
