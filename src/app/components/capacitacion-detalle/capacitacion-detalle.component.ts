import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-capacitacion-detalle',
  templateUrl: './capacitacion-detalle.component.html',
  styleUrls: ['./capacitacion-detalle.component.css']
})
export class CapacitacionDetalleComponent implements OnInit {

  capacitacion_id : number;
  constructor(private _route: ActivatedRoute) {
    this.capacitacion_id = parseInt(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

}
