/*
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total.
Ejemplos de la corrida:

Nombre del profesor contratado: Rafael
Monto del bono: $30
Cantidad de horas: 15
Ingreso total del profesor Rafael: $180

Nombre del profesor contratado: Felicia
Monto del bono: $30
Cantidad de horas: 20
Ingreso total del profesor Felicia: $230
*/

import { Cl_Fijos } from "./Cl_Fijos.js";
import { Cl_Contratados } from "./Cl_Contratados.js";

export class Cl_Main {
    constructor() {
        this.fijos = new Cl_Fijos();
        this.salida = document.getElementById("salida");
        this.main();
    }

    main() {
        let contratado = new Cl_Contratados("Rafael", 30, 15);
        let contratado2 = new Cl_Contratados("Felicia", 30, 20);

        this.salida.innerHTML = `<p>Nombre del profesor contratado: ${contratado.nombre} <br>
        Monto del bono: $${contratado.bono} <br>
        Cantidad de horas: ${contratado.horas} <br>
        Ingreso total del profesor ${contratado.nombre}: $${contratado.pagoTotal()}</p>`;
        this.salida.innerHTML += `<p>Nombre del profesor contratado: ${contratado2.nombre} <br>
        Monto del bono: $${contratado2.bono} <br>
        Cantidad de horas: ${contratado2.horas} <br>
        Ingreso total del profesor ${contratado2.nombre}: $${contratado2.pagoTotal()}</p>`
    }
}