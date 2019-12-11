import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaDetalleComponent } from './asesoria-detalle.component';

describe('AsesoriaDetalleComponent', () => {
  let component: AsesoriaDetalleComponent;
  let fixture: ComponentFixture<AsesoriaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoriaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
