import { Component, OnInit } from '@angular/core';
import { SolicitudAsesoria } from "../../solicitudAsesoria";
import { SolicitudService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrls: ['./mis-solicitudes.component.css']
})
export class MisSolicitudesComponent implements OnInit {


  solicitudAsesoriaDescripcion:string;
  solicitudFechaAsesoria:Date;
  asesoria:any;
  cotrato_id:string;
  solicitudes:any = {};
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



  getSolicitudes(contrato:number){
   
  }

}
