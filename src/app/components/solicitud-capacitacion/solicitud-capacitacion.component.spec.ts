import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCapacitacionComponent } from './solicitud-capacitacion.component';

describe('SolicitudCapacitacionComponent', () => {
  let component: SolicitudCapacitacionComponent;
  let fixture: ComponentFixture<SolicitudCapacitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudCapacitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
