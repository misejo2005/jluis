import {Impuestos} from './impuestos';
import {Articulo} from './articulo';
export class Alcohol {

    porcentaje : number;

    precio : number;
    nombre : string;
    descripcion : string;

    public tipo_alcohol : string;

    private porcentaje_alchohol: number;

    constructor(precio : number, nombre : string){
        this.precio = precio;
        this.nombre = nombre;
    }

    calcular(tipo:string){
        return 0;
    }

    public getPorcentajeAlcohol() {
        return this.porcentaje_alchohol;
    }
}
