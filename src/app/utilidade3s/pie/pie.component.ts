import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input() precio : number = 199.99;


  constructor() { }

    ngOnInit() {
/*
    setTimeout(() => {
      this.precio = 15.33;
    }, 3000);
*/
  }

}
