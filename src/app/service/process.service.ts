import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Como se consume rutas es recomendable usar los HttpClient y HttpHeader */
import { PID, SERVICEID, CLIENDID, USER, APPLICATION } from '../business/config/header.constant';


@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  API_URL_PROCESS = 'http://localhost:8096/contratoterceros/v4';

  constructor( private http: HttpClient) { }


  getProcess() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_PROCESS}/listarProcess`, options );

   }


   postProcess( process: any ) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.post( `${this.API_URL_PROCESS}/registrarProcess`, process, options );
  
   }


   putProcess() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.put( `${this.API_URL_PROCESS}/registrarProcess`, options );
  
   }


   delProcess() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.delete( `${this.API_URL_PROCESS}/registrarProcess`, options );
  
   }





}
