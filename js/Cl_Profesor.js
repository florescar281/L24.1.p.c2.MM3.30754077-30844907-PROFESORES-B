export class Cl_Profesor {
    constructor(nom, tipo) {
        this.nombre = nom;
        this._tipo = tipo;
    }
    set nombre (nom) {
        this._nom = nom;
    }

    get nombre () {
        return this._nom;
    }
}