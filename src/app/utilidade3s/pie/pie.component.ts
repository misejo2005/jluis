import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input() precio : number = 199.99;

  importe : number = 0;
  cantidad : number = 1;

  @Output() onImporte : EventEmitter<number>= new EventEmitter<number>();

  @Output() onSeleccionar : EventEmitter<boolean>= new EventEmitter<boolean>();

  constructor() { }

    ngOnInit() {
/*
    setTimeout(() => {
      this.precio = 15.33;
    }, 3000);
*/
  }

  calculoImporte(event : any)
{
  console.log(event);
  this.importe = event.target.value*1.16;

}

calculaTotal() {
  alert("ya estoy aqui");
  let total = this.importe * this.cantidad;
  this.onImporte.emit(total);
}

seleccionar(){
  console.log("Hice click en pie seleccionar");
  this.onSeleccionar.emit(true);

}

}
