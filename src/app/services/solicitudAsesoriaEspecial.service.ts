import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudAsesoriaEspecial } from '../solicitudAsesoriaEspecial';

@Injectable({providedIn: 'root'})
export class AsesoriaEspecialService {
    constructor(private http: HttpClient) { }
    
    sendSolicitudAsesoria(solicitud:SolicitudAsesoriaEspecial){
        return this.http.post<any>('http://localhost:63382/api/solicitudAsesoriaEspecial/insertSolicitud', solicitud);   
    }     
    

    getSolicitudesByContrato(contrato:number){
        return this.http.get(`http://localhost:63382/api/solicitudAsesoriaEspecial/solByContrato/${ contrato}`);
      }
}