import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiContratoComponent } from './mi-contrato.component';

describe('MiContratoComponent', () => {
  let component: MiContratoComponent;
  let fixture: ComponentFixture<MiContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
