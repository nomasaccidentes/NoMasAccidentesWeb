import { Component, OnInit } from '@angular/core';
import { SolicitudCapacitacion } from '../../solicitudCapacitacion';
import { SolicitudService } from "../../services/solicitudes.service";
@Component({
  selector: 'app-solicitud-capacitacion',
  templateUrl: './solicitud-capacitacion.component.html',
  styleUrls: ['./solicitud-capacitacion.component.css']
})
export class SolicitudCapacitacionComponent implements OnInit {

  solicitudFechaCapacitacion: Date = null;
  solicitudCapacitacionDescripcion: string = "";
  cotrato_id:number;
  capacitacion:any;

  capacitaciones:any = [];
  constructor(private _solicitud: SolicitudService) { 
    this.cotrato_id = parseInt(localStorage.getItem('contrato'));
    this.capacitacion = new SolicitudCapacitacion(this.solicitudFechaCapacitacion, this.solicitudCapacitacionDescripcion, this.cotrato_id);


    this._solicitud.getSolicitudesCapacitacionByIdContrato(this.cotrato_id).subscribe(
      data =>{
        this.capacitaciones = data;
      }
    )
  }



  ngOnInit() {
  }


  onSubmitCapacitacion(){
    if(this.capacitacion.solicitudFechaCapacitacion == null){
      alert("Debe ingresar una fecha");
      return false;
    }else if(this.capacitacion.solicitudCapacitacionDescripcion == ""){
      alert("Debe ingresar una descripcion");
      return false;
    }else {
      this._solicitud.sendSolicitudCapacitacion(this.capacitacion).subscribe(
        data => {
          alert("Solicitud Capacitación agregada");
          window.location.reload();
        }, 
        error => {
          alert("Error al agregar")
        }
      )
    }
  }
}
