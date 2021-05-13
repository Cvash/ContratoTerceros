import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PID, SERVICEID, CLIENDID, USER, APPLICATION } from '../business/config/header.constant';

@Injectable({
  providedIn: 'root'
})
export class ContractExpensesService {

  constructor( private http: HttpClient ) { }

  API_URL_CONTRACT_EXPENSES = 'http://localhost:8096/contratoterceros/v3';

  getContractExpenses() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_CONTRACT_EXPENSES}/listarContract_expenses`, options );

  }
// Para poder recoger solo un valor
  getContractExpense( id: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_CONTRACT_EXPENSES}/listarContract_expenses/${id}`, options );

  }

// Guardar informaci+on
  saveContractExpenses( contractExpense: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.post( `${this.API_URL_CONTRACT_EXPENSES}/registrarContractExpenses`, contractExpense, options );

   }

   // actualizar información
   updateContractExpenses(id, putContractExpenses) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.put( `${this.API_URL_CONTRACT_EXPENSES}/registrarContractExpenses/${id}`, putContractExpenses, options );

   }

   deleteContractExpenses( id: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.delete( `${this.API_URL_CONTRACT_EXPENSES}/registrarContractExpenses/${id}`, options );

   }

}
