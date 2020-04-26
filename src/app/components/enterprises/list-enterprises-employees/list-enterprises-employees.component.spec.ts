import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnterprisesEmployeesComponent } from './list-enterprises-employees.component';

describe('ListEnterprisesEmployeesComponent', () => {
  let component: ListEnterprisesEmployeesComponent;
  let fixture: ComponentFixture<ListEnterprisesEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnterprisesEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnterprisesEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
