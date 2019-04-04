import asistencia from "./asistencias.js";
import Asistencia from "./Employee-Asistencia.js";
class Main {
    constructor() 
    {
        this._Asistencias = new asistencia(document.querySelector("#Asistencias"),document.querySelector("#info") );
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) 
            {
                let Numero = document.querySelector("#Numero").value;
                let Nombre = document.querySelector("#Nombre").value;
                let Tipo = document.querySelector("#Tipo").value;
                let fechai = document.querySelector("#Fecha").value;
                fechai = fechai.split("-");
                let fecha = new Date(fechai[0], fechai[1] - 1, fechai[2]);
                let objEmployee = 
                {
                    fecha: fecha,
                    Numero: Numero,
                    Nombre: Nombre,
                    Tipo: Tipo,
                };
                let employee = new Asistencia(objEmployee);
                this._Asistencias.addEmployee(employee);
            }
        })
    }
}
let m = new Main();
