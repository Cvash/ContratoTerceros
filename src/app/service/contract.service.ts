import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PID, SERVICEID, CLIENDID, USER, APPLICATION } from '../business/config/header.constant';


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor( private http: HttpClient ) { }

  API_URL_CONTRACT = 'http://localhost:8096/contratoterceros/v8';


  getContracts() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_CONTRACT}/listarContract`, options );

   }

   getContract(id: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_CONTRACT}/listarContract/${id}`, options );

   }


   postContract( contract: any ) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.post( `${this.API_URL_CONTRACT}/registrarContract`, contract,  options );

   }


   putContract(id, putContract) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.put( `${this.API_URL_CONTRACT}/registrarContract/${id}`, putContract, options );

   }


   delContract(id: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.delete( `${this.API_URL_CONTRACT}/registrarContract/${id}`, options );

   }


}
