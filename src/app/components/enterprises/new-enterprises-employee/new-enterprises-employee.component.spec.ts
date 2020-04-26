import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnterprisesEmployeeComponent } from './new-enterprises-employee.component';

describe('NewEnterprisesEmployeeComponent', () => {
  let component: NewEnterprisesEmployeeComponent;
  let fixture: ComponentFixture<NewEnterprisesEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnterprisesEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnterprisesEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
