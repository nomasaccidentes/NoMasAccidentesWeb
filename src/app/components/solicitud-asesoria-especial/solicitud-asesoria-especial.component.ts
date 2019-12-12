import { Component, OnInit } from '@angular/core';
import { TipoAsesoriaEspecialService } from "../../services/tipoAsesoriaEspecial.service";
import { SolicitudAsesoriaEspecial } from "../../solicitudAsesoriaEspecial";
import { AsesoriaEspecialService } from "../../services/solicitudAsesoriaEspecial.service";
@Component({
  selector: 'app-solicitud-asesoria-especial',
  templateUrl: './solicitud-asesoria-especial.component.html',
  styleUrls: ['./solicitud-asesoria-especial.component.css']
})
export class SolicitudAsesoriaEspecialComponent implements OnInit {
  solicitudAsesoriaEspecialDescripcion:string = "";
  solicitudFechaAsesoria:Date = null;
  solicitudAsesoriaTipoEspecial:number = 0;
  asesoria:any;
  cotrato_id:string;
  solicitudes:any = {};
  tipoAsesoria:any = {};
  constructor(private _tipoAsesoriaEspecial:TipoAsesoriaEspecialService, private _solicitudEspecial: AsesoriaEspecialService) {

    this.cotrato_id = localStorage.getItem('contrato');
    this.asesoria = new SolicitudAsesoriaEspecial(this.solicitudFechaAsesoria, this.solicitudAsesoriaEspecialDescripcion, parseInt(this.cotrato_id), this.solicitudAsesoriaTipoEspecial);
    this._tipoAsesoriaEspecial.getTipoAsesorias().subscribe(
        (data:any) => {
          this.tipoAsesoria = data.data;
        }
      )

    this._solicitudEspecial.getSolicitudesByContrato(parseInt(this.cotrato_id)).subscribe(
        (data:any)=> {
          this.solicitudes = data.data;
      });
   }

  ngOnInit() {
  }


  onSubmitAsesoria(){
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
      this._solicitudEspecial.sendSolicitudAsesoria(this.asesoria).subscribe(
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
