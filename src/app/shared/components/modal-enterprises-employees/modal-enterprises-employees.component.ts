import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-enterprises-employees',
  templateUrl: './modal-enterprises-employees.component.html',
  styleUrls: ['./modal-enterprises-employees.component.scss']
})
export class ModalEnterprisesEmployeesComponent implements OnInit {

  constructor(
    public dialog:MatDialogRef<ModalEnterprisesEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
