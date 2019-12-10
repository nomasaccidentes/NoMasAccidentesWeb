import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAsesoriaEspecialComponent } from './solicitud-asesoria-especial.component';

describe('SolicitudAsesoriaEspecialComponent', () => {
  let component: SolicitudAsesoriaEspecialComponent;
  let fixture: ComponentFixture<SolicitudAsesoriaEspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAsesoriaEspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAsesoriaEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
