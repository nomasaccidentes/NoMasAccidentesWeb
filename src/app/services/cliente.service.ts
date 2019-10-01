import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http:HttpClient) { }


  getContratoByClienteId(cliente_id:number){
 

    return this._http.get(`http://localhost:63382/api/contrato/GetContratoByClienteId/${ cliente_id}`);
  }

  
}
