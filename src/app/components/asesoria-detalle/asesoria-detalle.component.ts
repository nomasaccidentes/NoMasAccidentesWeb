import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AsesoriaDetalleService } from '../../services/asesoriaDetalle.service';

@Component({
  selector: 'app-asesoria-detalle',
  templateUrl: './asesoria-detalle.component.html',
  styleUrls: ['./asesoria-detalle.component.css']
})
export class AsesoriaDetalleComponent implements OnInit {

  asesoriaId:number;
  asesoriaDetalle:any = {};
  registrosAccidentes:any = {};
  constructor(private _route: ActivatedRoute, private _asesoriDetalle:AsesoriaDetalleService) {
    this.asesoriaId = parseInt(this._route.snapshot.paramMap.get('id'));

    _asesoriDetalle.getAsesoriaDetalle(this.asesoriaId).subscribe(
      (data:any) => {
        this.asesoriaDetalle = data.data;
      }
    )

     _asesoriDetalle.getRegistroAccidenteByAsesoria(this.asesoriaId).subscribe(
      (data:any) => {
        this.registrosAccidentes = data.data;
      }
    )
   }

  ngOnInit() {
  }

}
