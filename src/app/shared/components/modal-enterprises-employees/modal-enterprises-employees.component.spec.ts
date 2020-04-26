import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnterprisesEmployeesComponent } from './modal-enterprises-employees.component';

describe('ModalEnterprisesEmployeesComponent', () => {
  let component: ModalEnterprisesEmployeesComponent;
  let fixture: ComponentFixture<ModalEnterprisesEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnterprisesEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnterprisesEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
