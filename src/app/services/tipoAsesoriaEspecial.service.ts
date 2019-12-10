import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TipoAsesoriaEspecialService {
    constructor(private httpClient: HttpClient) { }
 
    
    getTipoAsesorias(){
        return this.httpClient.get(`http://localhost:63382/api/tipoAsesoriaEspecial/getTipos`);
    }
}