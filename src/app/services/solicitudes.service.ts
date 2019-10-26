import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudAsesoria } from "../solicitudAsesoria";
import { SolicitudCapacitacion } from '../solicitudCapacitacion';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) {
  }


  sendSolicitudAsesoria(solicitud: SolicitudAsesoria){
    return this.http.post<any>('http://localhost:63382/api/solicitudAsesoria/insertSolicitud', solicitud);     
  }


  getSolicitudesByContrato(contrato:number){
    return this.http.get(`http://localhost:63382/api/solicitudAsesoria/solByContrato/${ contrato}`);
  }


  sendSolicitudCapacitacion(capacitacion: SolicitudCapacitacion){
    return this.http.post<any>('http://localhost:63382/api/solicitudCapacitacion/insertSolicitud', capacitacion);     
  }


  getSolicitudesCapacitacionByIdContrato(contrato:number){
    return this.http.get(`http://localhost:63382/api/solicitudCapacitacion/capByContrato/${ contrato}`);
  }
}