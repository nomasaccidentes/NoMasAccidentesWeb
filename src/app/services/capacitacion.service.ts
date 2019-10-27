import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CapacitacionService {
    constructor(private httpClient: HttpClient) {

     }
    

    getCapacitacionesByContrato(contrato_id:number){
 

        return this.httpClient.get(`http://localhost:63382/api/capacitacion/getCapacitacionById/${ contrato_id}`);
    }
}