import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public titulo : string = "TITULO CON MAYUSCULA";
  public codigo : number = 34774

  public clase : String = "fondo";

  constructor() { }

  ngOnInit(): void {
  }

  public getStatus() : string {
   return "Nombre";
  }

  public getTotal(importe : number) {
    return importe * 1.16;
  }

}
