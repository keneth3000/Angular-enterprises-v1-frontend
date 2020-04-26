import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterprisesComponent } from './edit-enterprises.component';

describe('EditEnterprisesComponent', () => {
  let component: EditEnterprisesComponent;
  let fixture: ComponentFixture<EditEnterprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnterprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
