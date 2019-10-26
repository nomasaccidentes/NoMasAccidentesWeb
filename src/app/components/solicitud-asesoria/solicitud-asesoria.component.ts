import { Component, OnInit } from '@angular/core';
import { SolicitudAsesoria } from "../../solicitudAsesoria";
import { SolicitudService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitud-asesoria',
  templateUrl: './solicitud-asesoria.component.html',
  styleUrls: ['./solicitud-asesoria.component.css']
})
export class SolicitudAsesoriaComponent implements OnInit {

  solicitudAsesoriaDescripcion:string = "";
  solicitudFechaAsesoria:Date = null;
  asesoria:any;
  cotrato_id:string;
  solicitudes:any = [];
  constructor( private _solicitudService : SolicitudService ) { 

    this.cotrato_id = localStorage.getItem('contrato');
    this.asesoria = new SolicitudAsesoria(this.solicitudFechaAsesoria, this.solicitudAsesoriaDescripcion, parseInt(this.cotrato_id));

    this._solicitudService.getSolicitudesByContrato(parseInt(this.cotrato_id)).subscribe(
      data=> {
        this.solicitudes = data;
    });
  }

  ngOnInit() {
  }


  onSubmitAsesoria(form){
    if(this.asesoria.solicitudAsesoriaDescripcion == ""){
      alert("Debe ingresar una descripcion");
      return false;
    }else if(this.asesoria.solicitudFechaAsesoria == null){
      alert("Debe ingresar una fecha");
      return false;
    }else if(this.asesoria.cotrato_id == ''){
      alert("Error al encontrar el contrato");
      return false;
    }else{
      this._solicitudService.sendSolicitudAsesoria(this.asesoria).subscribe(
        data => {
          alert("Solicitud Ingresada");
          window.location.reload();
        }, 
        error => {
          alert("Error al ingresar");
        }
      );
    }

  
    
  }

}
