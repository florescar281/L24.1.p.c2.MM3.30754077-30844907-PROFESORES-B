import { Cl_Profesor } from "./Cl_Profesor.js";

export class Cl_Fijos extends Cl_Profesor {
    constructor(nom, bono, sueldo) {
        super(nom);
        this.bono = bono;
        this.sueldo = sueldo;
    }

    set bono (bono) {
        this._bono = bono;
    }

    set sueldo (sueldo) {
        this._sueldo = sueldo;
    }

    get bono () {
        return this._bono;
    }

    get sueldo () {
        return this._sueldo;
    }   

    nombre() {
        return nom;
    }

    sueldoTotal() {
        return this.bono + this.sueldo;
    }
}