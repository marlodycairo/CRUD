import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoTarjetaComponent } from './empleado-tarjeta.component';

describe('EmpleadoTarjetaComponent', () => {
  let component: EmpleadoTarjetaComponent;
  let fixture: ComponentFixture<EmpleadoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
