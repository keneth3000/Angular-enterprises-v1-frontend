import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnterprisesComponent } from './modal-enterprises.component';

describe('ModalEnterprisesComponent', () => {
  let component: ModalEnterprisesComponent;
  let fixture: ComponentFixture<ModalEnterprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnterprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
