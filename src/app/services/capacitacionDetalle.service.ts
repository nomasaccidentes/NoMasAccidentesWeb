import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapacitacionDetalle } from '../capacitacionDetalle';

@Injectable({providedIn: 'root'})
export class CapacitacionDetalleService {
    constructor(private httpClient: HttpClient) { }


    getDetalleByCapacitacionId(capacitacion_id:number){
        return this.httpClient.get(`http://localhost:63382/api/capacitacionDetalle/getCapacitacionDetalleById/${ capacitacion_id}`);
    }


    insertDetalleCapacitacion(capacitacionDetalle:CapacitacionDetalle){
        return this.httpClient.post<any>('http://localhost:63382/api/capacitacionDetalle/insertCapacitacion', capacitacionDetalle);     
    }


    actuclizaDetalleCapacitacion(capacitacion:CapacitacionDetalle, id:number){
        return this.httpClient.put('http://localhost:63382/api/capacitacionDetalle/updateLista/'+id, capacitacion);
    }
    
}