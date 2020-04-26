import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnterprisesComponent } from './new-enterprises.component';

describe('NewEnterprisesComponent', () => {
  let component: NewEnterprisesComponent;
  let fixture: ComponentFixture<NewEnterprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnterprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
