import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoMasAccidentesWeb';

  username = null;
  constructor(){
    this.username = localStorage.getItem('username');
  }
  
}
