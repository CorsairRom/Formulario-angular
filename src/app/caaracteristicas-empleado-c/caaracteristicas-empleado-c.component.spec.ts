import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaracteristicasEmpleadoCComponent } from './caaracteristicas-empleado-c.component';

describe('CaaracteristicasEmpleadoCComponent', () => {
  let component: CaaracteristicasEmpleadoCComponent;
  let fixture: ComponentFixture<CaaracteristicasEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaracteristicasEmpleadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaaracteristicasEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
