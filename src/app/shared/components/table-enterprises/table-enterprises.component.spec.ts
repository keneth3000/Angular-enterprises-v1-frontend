import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnterprisesComponent } from './table-enterprises.component';

describe('TableEnterprisesComponent', () => {
  let component: TableEnterprisesComponent;
  let fixture: ComponentFixture<TableEnterprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnterprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
