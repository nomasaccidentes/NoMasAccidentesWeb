import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AsesoriaDetalleService } from "../../services/asesoriaDetalle.service";
import { RegistroAccidenteDetalle } from "../../registroAccidenteDetalle";
@Component({
  selector: 'app-registro-accidente',
  templateUrl: './registro-accidente.component.html',
  styleUrls: ['./registro-accidente.component.css']
})
export class RegistroAccidenteComponent implements OnInit {

  registroId:number;

  registroAccidente:any = {};
  registroAccidenteDetalleNombre:string;
  registroAccidenteDetalleUsuario:string;
  registroAccidenteDetalleFecha:Date = new Date();
  ingresoComentario:any;
  constructor(private _route: ActivatedRoute, private _asesoriaDetalle:AsesoriaDetalleService ) {
    this.registroId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.registroAccidenteDetalleUsuario = localStorage.getItem('username');
    this.ingresoComentario = new RegistroAccidenteDetalle(this.registroAccidenteDetalleNombre, this.registroAccidenteDetalleUsuario, this.registroAccidenteDetalleFecha, this.registroId);
      _asesoriaDetalle.getDetalleRegistroAccidente(this.registroId).subscribe(
        (data:any) => {
          this.registroAccidente = data.data;
        }
      )

   }

  ngOnInit() {
  }


  onSubmitComentarios(){

    if(this.registroAccidenteDetalleNombre == ""){
      alert("Debe ingresar un comentario");
      return false;
    }
    this._asesoriaDetalle.postRegistroAccidenteDetalle(this.ingresoComentario).subscribe(
      data => {
        alert("Comentario Agregado");
        window.location.reload();
      }
    )
  }

}
