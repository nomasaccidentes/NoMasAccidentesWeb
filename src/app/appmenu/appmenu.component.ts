import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  username = "";
  constructor() {
    this.username = localStorage.getItem('username');
   }

  ngOnInit() {
  }

}
