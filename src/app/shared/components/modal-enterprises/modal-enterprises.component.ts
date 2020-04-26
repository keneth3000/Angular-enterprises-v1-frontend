import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-enterprises',
  templateUrl: './modal-enterprises.component.html',
  styleUrls: ['./modal-enterprises.component.scss']
})
export class ModalEnterprisesComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ModalEnterprisesComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
