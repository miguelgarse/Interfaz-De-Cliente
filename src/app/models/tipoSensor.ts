export class tipoSensor {

    tipos: String[]=["agua","peso","humedad_tierra","temperatura_interior","humedad_ambiental","luz_ambiental","temperatura_ambiental","Co2"];

    nombre: string;
    descripcion: string;

    constructor(nombre?: string, descripcion?: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    getTipo(){
        return this.tipos;
    }
}