import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from '../../services/capacitacion.service';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {

  contrato_id:number;
  capacitacion: any = [];

  constructor(private _capacitacionService : CapacitacionService) { 

    this.contrato_id = parseInt(localStorage.getItem('contrato'));
    this._capacitacionService.getCapacitacionesByContrato(this.contrato_id).subscribe(
      data => {
        this.capacitacion = data;
      }
    )
  }

  ngOnInit() {
  }


  elevarSolicitud(){
    
  }

}
