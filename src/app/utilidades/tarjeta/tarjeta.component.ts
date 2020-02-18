import { Component, OnInit } from '@angular/core';
import { Articulo} from "../../modelos/articulo";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public articulo : Articulo = {
    precio : 899.99,
    nombre : 'Articulo',
    descripcion : 'Esta es una descipcion'
  }



  constructor() { }

  ngOnInit(): void {
  }

  public addImporte(importe : number){
    console.log(importe);
  }
}
