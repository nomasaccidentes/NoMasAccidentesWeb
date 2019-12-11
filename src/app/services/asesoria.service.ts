import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AsesoriaService {
    constructor(private http: HttpClient) { }
    

    getAsesoriaByContratoId(contrato_id:number){
        return this.http.get(`http://localhost:63382/api/asesoria/getAsesorias/${ contrato_id}`);
    }
}