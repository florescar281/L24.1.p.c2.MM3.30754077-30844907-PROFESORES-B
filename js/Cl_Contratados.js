import { Cl_Profesor } from "./Cl_Profesor.js";

export class Cl_Contratados extends Cl_Profesor {
    constructor(nom, bono, horas) {
        super(nom);
        this.nombre = nom;
        this.bono = bono;
        this.horas = horas;
    }

    set bono(bono) {
        this._bono = bono;
    }

    get bono() {
        return this._bono;
    }

    set horas(horas) {
        this._horas = horas;
    }

    get horas() {
        return this._horas;
    }

    pagoHoras() {
        return 10 * this.horas;
    }

    pagoTotal() {
        return this.bono + this.pagoHoras();
    }
}