import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  @Input() descripcion : String = "Blanca Nieves";
  
  //descripcion : string ="Esta es la descripción del producto";

  constructor() { }

  ngOnInit(): void {
  }

}
