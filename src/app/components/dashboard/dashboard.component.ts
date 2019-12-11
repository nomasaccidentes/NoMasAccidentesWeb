import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Contrato } from '../../contrato';
import { ContratoService } from '../../services/contrato.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contrato:any;
  contratoId:number;
  detalleAsesoria:any;
  detalleCapacitacion:any;
  constructor(private clienteService:ClienteService, private _contrato:ContratoService) {

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
    
    
    clienteService.getContratoByClienteId(parseInt(localStorage.getItem('cliente')))
      .subscribe(data=> {
        console.log(data[0]);
        this.contrato = data[0];
      });

    
   }

  ngOnInit() {


  }

}
