import { Component, OnInit } from '@angular/core';
import { IEnterprises } from '../../../shared/interface/Enterprises.interface';
import { ModalEnterprisesComponent } from '../../../shared/components/modal-enterprises/modal-enterprises.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  } 

}
