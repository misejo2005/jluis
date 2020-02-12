import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jluis';

  ngOnInit(){
    
    let nombre ="Jose Luis";
    let nombre2: string="Jose Luis2";
    let nombre3: string="Jose Luis3";

    let booleano : boolean= true;

    let nombre4: any="cesar";

    let nombre5: string | number = 3;

    let objeto1: any = {
      nombre : "cesar",
      apellido : "castillo"
    }

    let objeto2 = {
      nombre : "cesar",
      apellido : "castillo"
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML= objeto1.nombre;

    resultado.innerHTML=objeto2["nombre"];

    let atributo:string="apellido";
    resultado.innerHTML=objeto1[atributo];

    let nulo: string = null;

    let fecha: Date= new Date();

    let arreglo : string[]=[];
    let arreglo2 : string[]=["a","b",'c'];

    let arreglo3 : Array<string>=["d","f","g"];

    //arrowfunctions
    let usuario : any = {
      nombre :"cesar",
      getNombre: (() : string => {
          //....
          //
          return nombre;
      }),
      setNombre : ((parametro: string): void => {
        nombre = parametro;
      })
    }

    usuario.setNombre("Jose Luis");
    console.log(typeof usuario.getNombre());
    resultado.innerHTML=usuario.getNombre();
  }
}
