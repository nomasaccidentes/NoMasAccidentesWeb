import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitacionDetalleService } from "../../services/capacitacionDetalle.service";
import { CapacitacionDetalle } from '../../capacitacionDetalle';


@Component({
  selector: 'app-capacitacion-detalle',
  templateUrl: './capacitacion-detalle.component.html',
  styleUrls: ['./capacitacion-detalle.component.css']
})
export class CapacitacionDetalleComponent implements OnInit {

  capacitacion_id : number;
  ifDatos:boolean;

  detalleCapacitacion:Array<any> = [];
  detalleCapacitacionEdit:CapacitacionDetalle[] = [];
  constructor(private _route: ActivatedRoute, private capService:CapacitacionDetalleService) {
    this.capacitacion_id = parseInt(this._route.snapshot.paramMap.get('id'));

     this.capService.getDetalleByCapacitacionId(this.capacitacion_id).subscribe(
       (data:any[]) => {
        
         
         if(data.length != 0){
           this.detalleCapacitacion = data;
           console.log(this.detalleCapacitacion);
           
          this.ifDatos = true;
         }else{
           this.ifDatos = false;
         }
       }
     );

    


   }

   private fieldArray: Array<any> = [];
   private newAttribute: any = {};

   private capacitacionDetalle:any;
    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

  ngOnInit() {
  }



  agregarParticipantes(){
    this.fieldArray.forEach(element => {
      this.capacitacionDetalle = new CapacitacionDetalle(element.nombre, element.correo, 0, this.capacitacion_id);
      

      this.capService.insertDetalleCapacitacion(this.capacitacionDetalle).subscribe(
        data =>{
          
        }
      )
    });

    console.log("Registros Agregados");
    window.location.reload();
    
  }



  pasaListaParticipantes(){
    console.log(this.detalleCapacitacionEdit);
    
  }

}
