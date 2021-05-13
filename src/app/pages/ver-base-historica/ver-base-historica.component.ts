import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { HttpClient } from '@angular/common/http';
import { ContractService } from 'src/app/service/contract.service';
@Component({
  selector: 'app-ver-base-historica',
  templateUrl: './ver-base-historica.component.html',
  styleUrls: ['./ver-base-historica.component.css']
})
export class VerBaseHistoricaComponent implements OnInit {


  CONTRACT_DATA: any = [];

  dataSourceContract = new MatTableDataSource(this.CONTRACT_DATA);
  dataSource = new MatTableDataSource(this.CONTRACT_DATA);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'prueba'];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSourceContract.paginator = this.paginator;
  }

  constructor(
    private http: HttpClient,
    private contractService: ContractService
  ) {}

  listarContract: any = [];

  ngOnInit(): void {
    this.listarusuariosContract();
  }

  listarusuariosContract() {
    this.contractService.getContracts().subscribe(
      (res) => {
       // console.log('res', res);
        // this.listarContract = res;
        this.responseGetContract(res);
        console.log(this.listarContract);
      },
      (err) => {
        console.log('Error de la prueba', err);
      }
    );
  }

  responseGetContract(res){
    this.CONTRACT_DATA = res;
    console.log(this.CONTRACT_DATA);
    this.dataSourceContract = new MatTableDataSource(this.CONTRACT_DATA);
    /**  paginacion */
    this.dataSourceContract.paginator = this.paginator;
  }


}
