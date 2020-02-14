import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';



@NgModule({
  declarations: [TarjetaComponent, EncabezadoComponent, CuerpoComponent],
  imports: [
    CommonModule
  ], exports : [TarjetaComponent]
})
export class UtilidadesModule { }
