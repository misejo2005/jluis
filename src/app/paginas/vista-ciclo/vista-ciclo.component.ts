import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../modelos/articulo';

@Component({
  selector: 'app-vista-ciclo',
  templateUrl: './vista-ciclo.component.html',
  styleUrls: ['./vista-ciclo.component.css']
})
export class VistaCicloComponent implements OnInit {

  articulos: Articulo[]= [{
    nombre:"Refreso",
    descripcion:"Liquido",
    precio:11
  }, {
    nombre:"Totitos",
    descripcion:"Abarrotes",
    precio:13
  }, {
    nombre:"Tequila",
    descripcion:"Bebida alcholica",
    precio:350
  }, {
    nombre:"Hamburguesa",
    descripcion:"Comida",
    precio:55
  }, {
    nombre:"Cafe",
    descripcion:"Liquido",
    precio:40
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
