import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-condicion',
  templateUrl: './vista-condicion.component.html',
  styleUrls: ['./vista-condicion.component.css']
})
export class VistaCondicionComponent implements OnInit {

  alert : string = 'primary';

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.alert = "danger";
    }, 2000);
    
    setTimeout(() => {
      this.alert = "success";
    }, 4000);
    
    setTimeout(() => {
      this.alert = "info";
    }, 6000);
    
    setTimeout(() => {
      this.alert = "warning";
    }, 8000);
    

  }

}
