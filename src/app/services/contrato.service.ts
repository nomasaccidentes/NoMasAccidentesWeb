import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ContratoService {
    constructor(private http: HttpClient) { }
    
    getAsesoriasByContratoId(contratoId:number){
        return this.http.get(`http://localhost:63382/api/contrato/GetRestanteAsesoria/${contratoId}`);
    }

    getCapacitacionByContratoId(contratoId:number){
        return this.http.get(`http://localhost:63382/api/contrato/GetRestanteCapacitacion/${contratoId}`);
    }
}