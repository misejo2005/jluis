import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

  @Input('nombre') titulo : String;

  public codigo : number = 34774

  public clase : String = "fondo";

  constructor() {
    console.log("CONSTRUCTOR",this.titulo);
   }

  ngOnInit(): void {
    console.log("ngOnInit",this.titulo);
   //inicializar variables, inicializar api, hacer una conexion
   //traer valores como coockies.

  }

  public getStatus() : string {
   return "Nombre";
  }

  public getTotal(importe : number) {
    return importe * 1.16;
  }

}
