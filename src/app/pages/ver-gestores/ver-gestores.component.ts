import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { TrasferenciaContratosComponent } from '../popups/trasferencia-contratos/trasferencia-contratos.component';
@Component({
  selector: 'app-ver-gestores',
  templateUrl: './ver-gestores.component.html',
  styleUrls: ['./ver-gestores.component.css']
})
export class VerGestoresComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TrasferenciaContratosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }

}
