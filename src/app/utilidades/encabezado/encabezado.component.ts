import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  @Input('nombre') titulo : String = "Blanca Nieves";

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
