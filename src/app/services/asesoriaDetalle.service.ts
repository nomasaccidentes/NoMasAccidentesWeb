import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroAccidenteDetalle } from '../registroAccidenteDetalle';

@Injectable({providedIn: 'root'})
export class AsesoriaDetalleService {
    constructor(private http: HttpClient) { }
    
    getAsesoriaDetalle(asesoriaId:number){
        return this.http.get(`http://localhost:63382/api//asesoriaDetalle/getAsesoriaDetallebyId/${asesoriaId}`);
    }

    getRegistroAccidenteByAsesoria(asesoriaId:number){
        return this.http.get(`http://localhost:63382/api/registroAccidente/registroAccidenteByAsesoria/${asesoriaId}`);
    }

    getDetalleRegistroAccidente(registroId:number){
        return this.http.get(`http://localhost:63382/api/registroAccidenteDetalle/registroAccidenteByRegistroId/${registroId}`);
    }


    postRegistroAccidenteDetalle(registro:RegistroAccidenteDetalle){
        return this.http.post<any>(`http://localhost:63382/api/registroAccidenteDetalle/insertRegistroAccidenteDetalle`, registro);
    }
}