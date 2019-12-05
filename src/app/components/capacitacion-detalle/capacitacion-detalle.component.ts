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

  public detalleCapacitacion:Array<any> = [];
  // public detalleCapacitacionEdit:Array<CapacitacionDetalle> = [];
  constructor(private _route: ActivatedRoute, private capService:CapacitacionDetalleService) {
    this.capacitacion_id = parseInt(this._route.snapshot.paramMap.get('id'));

     this.capService.getDetalleByCapacitacionId(this.capacitacion_id).subscribe(
       (data:any[]) => {
         if(data.length != 0){
           this.detalleCapacitacion = data;
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

   
    this.fieldArray.forEach(elemento => {
      

      this.capacitacionDetalle = new CapacitacionDetalle(elemento.nombre, elemento.correo, 0, this.capacitacion_id);

      console.log(this.capacitacionDetalle);

      this.capService.insertDetalleCapacitacion(this.capacitacionDetalle).subscribe(
        data => {
          
        }
      )
    });

    alert("Registros agregados");
          window.location.reload();
    return false;


    // this.fieldArray.forEach(element => {
    //   this.capacitacionDetalle = new CapacitacionDetalle(element.nombre, element.correo, 0, this.capacitacion_id)

    //   this.capService.insertDetalleCapacitacion(this.capacitacionDetalle).subscribe(
    //     data =>{
          
    //     }
    //   )
    // });

    // console.log("Registros Agregados");
    // window.location.reload();
    
  }



  pasaListaParticipantes(){

    this.detalleCapacitacion.forEach(element => {
      
      let asiste = 0;
      if(element.CAPACITACION_ASISTE === true || element.CAPACITACION_ASISTE == 1){
        asiste = 1;
      }

      let detalle = new CapacitacionDetalle('', '', asiste, this.capacitacion_id);
      
      console.log(detalle);
      
      this.capService.actuclizaDetalleCapacitacion(detalle, element.CAPACITACION_DETALLE_ID).subscribe(
        data => {

        }
      )

      
      
    });

    
      alert("Registros actualizados");
      // window.location.reload();
    
    // console.log(this.capacitacionDetalle.CAPACITACION_ID);
    


  }

}

