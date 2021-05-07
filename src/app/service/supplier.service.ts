import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Como se consume rutas es recomendable usar los HttpClient y HttpHeader */
import { PID, SERVICEID, CLIENDID, USER, APPLICATION } from 'src/app/business/flows/config/header.constant';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  API_URL_SUPPLIER = 'http://localhost:8096/contratoterceros/v1';

  constructor( private http: HttpClient) { }


  getSupplier() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });

    const options = { headers: headers };

    return this.http.get(`${this.API_URL_SUPPLIER}/listarSupplier`, options);

  }


  postSupplier(supplier: any) {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.post( `${this.API_URL_SUPPLIER}/listarManagement`, supplier, options );
  
   }


   putSupplier() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.put( `${this.API_URL_SUPPLIER}/listarManagement`, options );
  
   }


   delSupplier() {

    const headers = new HttpHeaders({
      'UNICA-PID': PID,
      'UNICA-ServiceId': SERVICEID,
      'X-IBM-Client-Id': CLIENDID,
      'UNICA-User': USER,
      'UNICA-Application': APPLICATION
    });
  
    const options = { headers: headers };
  
    return this.http.delete( `${this.API_URL_SUPPLIER}/listarManagement`, options );
  
   }

}
