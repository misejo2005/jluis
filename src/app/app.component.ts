import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules, CompileShallowModuleMetadata, isNgTemplate } from '@angular/compiler';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jluis';

  ngOnInit() {

    let nombre = "Jose Luis";
    let nombre2: string = "Jose Luis2";
    let nombre3: string = "Jose Luis3";

    let booleano: boolean = true;

    let nombre4: any = "cesar";

    let nombre5: string | number = 3;

    let objeto1: any = {
      nombre: "cesar",
      apellido: "castillo"
    }

    let objeto2 = {
      nombre: "cesar",
      apellido: "castillo"
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = objeto1.nombre;

    resultado.innerHTML = objeto2["nombre"];

    let atributo: string = "apellido";
    resultado.innerHTML = objeto1[atributo];

    let nulo: string = null;

    let fecha: Date = new Date();

    let arreglo: string[] = [];
    let arreglo2: string[] = ["a", "b", 'c'];

    let arreglo3: Array<string> = ["d", "f", "g"];

    //arrowfunctions
    let usuario: any = {
      nombre: "cesar",
      getNombre: ((): string => {
        //....
        //
        return nombre;
      }),
      setNombre: ((parametro: string): void => {
        nombre = parametro;
      })
    }

    usuario.setNombre("Jose Luis");
    console.log(typeof usuario.getNombre());
    resultado.innerHTML = usuario.getNombre();

    //arregps

    for (let i = 0; i < arreglo2.length; i++) {
      console.log(arreglo2[i]);
    }

    for (let valor of arreglo2) {
      console.log(valor);
    }

    let arreglo4: any[] = [{
      nombre: "cesar",
      apellido: "castillo"
    }, {
      nombre: "carlos",
      apellido: "rodriguez"
    }]

    for (let obj of arreglo4) {
      console.log(obj);
      console.log(obj.nombre);
    }

    arreglo4.forEach(item => {
      console.log(item);
    })

    arreglo4.forEach((item: any): void => {
      console.log(item);
    })

    //filter, map, find, sort

    let nombres: string[] = arreglo4.map(item => {
      return item.nombre;
    })

    console.log("NOMBRES", nombres);

    console.log(arreglo4[0].direccion);

    if (!arreglo4[0].direccion) {
      console.log("entro");
    }

    if ([].length) {
      console.log("estoy vacio");
    }

    if (["a", "b"].length) {
      console.log("ya tengo algo");
    }

    let valor_1: string;
    let valor_2: number = 1;

    if (valor_1 === undefined) {
      console.log("no tengo nada");
    }

    for (let attriuto in arreglo4[0]) {
      console.log("atributo", attriuto);
      console.log("valor", arreglo4[0][attriuto]);
    }

    let usuarios: any[] = [{
      nombre: "cesar",
      apellido: "castillo"
    }, {
      nombre: "carlos",
      apellido: "rodriguez"
    }, {
      nombre: "benito",
      apellido: "juarez"
    }, {
      nombre: "miguel",
      apellido: "hidalgo"
    }, {
      nombre: "juan",
      apellido: "escutia"
    }]

    let miguel_hidalgo = usuarios.find(item => {
      return item.nombre == "miguel" && item.apellido == "hidalgo";
    })

    console.log("MIGUEL", miguel_hidalgo);

    let lista: number[] = [1, 43, 2, 65, 3, 48, 9];

    let res = lista.filter(numero => {
      return numero > 40;
    })

    console.log(res);

  }
}
