import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-mi-contrato',
  templateUrl: './mi-contrato.component.html',
  styleUrls: ['./mi-contrato.component.css']
})
export class MiContratoComponent implements OnInit {

  detalleAsesoria:any;
  detalleCapacitacion:any;
  contratoId:any;
  asesoriasEspecialesConfirmadas:number;
  constructor(private _contrato:ContratoService) {

    this.contratoId = parseInt(localStorage.getItem('contrato'));
    _contrato.getAsesoriasByContratoId(this.contratoId).subscribe(
     (data:any) =>{
      this.detalleAsesoria = data.data;
     }
    );

    _contrato.getCapacitacionByContratoId(this.contratoId).subscribe(
      (data:any) =>{
       this.detalleCapacitacion = data.data;
      }
     );

     _contrato.getAsesoriasEspecialesConfirmadas(this.contratoId).subscribe(
       (data:any) => {
         this.asesoriasEspecialesConfirmadas = data.data;
       }
     )
   }

  ngOnInit() {
  }

}
