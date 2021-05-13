import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Como se consume rutas es recomendable usar los HttpClient y HttpHeader */
import { PID, SERVICEID, CLIENDID, USER, APPLICATION } from '../business/config/header.constant';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  API_URL_MANAGER = 'http://localhost:8096/contratoterceros/v9';

  constructor( private http: HttpClient ) { }


  getManagers() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_MANAGER}/listarManagement`, options );

   }

   getManager(id: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get( `${this.API_URL_MANAGER}/listarManagement/${id}`, options );

   }


   saveManager( manager: any ) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.post( `${this.API_URL_MANAGER}/registrarManager`, manager, options );
  
   }


   updateManager(id, putManager) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.put( `${this.API_URL_MANAGER}/registrarManager/${id}`, putManager, options );
  
   }


   deleteManager(id: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.delete( `${this.API_URL_MANAGER}/registrarManager/${id}`, options );
  
   }


}
