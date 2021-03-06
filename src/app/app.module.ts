import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule} from './utilidades/utilidades.module';
import { AdministracionModule} from './administracion/administracion.module';
import { ModulosExternosComponent } from './paginas/modulos-externos/modulos-externos.component';
import { VistaBootstrapComponent } from './paginas/vista-bootstrap/vista-bootstrap.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductosModule } from './productos/productos.module';
import { VistaTarjetaComponent } from './paginas/vista-tarjeta/vista-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    ModulosExternosComponent,
    VistaBootstrapComponent,
    VistaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    AdministracionModule,
    ModalModule.forRoot(),
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
