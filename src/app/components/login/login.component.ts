import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Login } from '../../login';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _loginService: LoginService, private router:Router) {
   }
  username:string= "";
  clave:string= "";

  login = new Login(this.username, this.clave);
  onSubmit(){

    this._loginService.login(this.login).subscribe(
      data => {
      if( data.data.cliente === null){
        alert("Apliación Incorrecta");
      }else if(data.data.contrato.contrato_activo == 0){
        alert("Contrato Inactivo, contactate con el administrador.");
      }else{
        localStorage.setItem('username', data.data.usuario_username);
        localStorage.setItem('cliente', data.data.cliente.cliente_id);
        localStorage.setItem('contrato', data.data.contrato.contrato_id);
        this.router.navigate(['/dashboard']);
        alert("Bienvenido " + data.data.usuario_username);
        window.location.reload();
      }

      
    },
    error => {
      alert(error.error.data);
    });
    
  }

}
