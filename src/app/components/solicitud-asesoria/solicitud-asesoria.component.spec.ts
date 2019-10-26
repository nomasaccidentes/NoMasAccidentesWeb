import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAsesoriaComponent } from './solicitud-asesoria.component';

describe('SolicitudAsesoriaComponent', () => {
  let component: SolicitudAsesoriaComponent;
  let fixture: ComponentFixture<SolicitudAsesoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAsesoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAsesoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
