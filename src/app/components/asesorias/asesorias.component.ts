import { Component, OnInit } from '@angular/core';
import { AsesoriaService } from '../../services/asesoria.service';
@Component({
  selector: 'app-asesorias',
  templateUrl: './asesorias.component.html',
  styleUrls: ['./asesorias.component.css']
})
export class AsesoriasComponent implements OnInit {

  asesorias:any = {};
  contrato_id:number;
  constructor(private _asesoria:AsesoriaService) {

    this.contrato_id = parseInt(localStorage.getItem('contrato'));
    this.asesorias = _asesoria.getAsesoriaByContratoId(this.contrato_id).subscribe(
      (data:any) => {
        
        this.asesorias = data.data;
      }
    )
   }

  ngOnInit() {
  }

}
