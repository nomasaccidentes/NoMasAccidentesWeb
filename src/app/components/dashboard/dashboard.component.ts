import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contrato:any;
  constructor(private clienteService:ClienteService) {

    
    
    clienteService.getContratoByClienteId(parseInt(localStorage.getItem('cliente')))
      .subscribe(data=> {
        console.log(data);
        this.contrato = data[0];
      });

    
   }

  ngOnInit() {


  }

}
