import saldo from "./saldos.js";
import Employee from "./Employee.js";
class Main {
    constructor() 
    {
        this._saldo = new saldo(document.querySelector("#movimientos"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) 
            {
                let Tipo = document.querySelector("#Tipo").value;
                let Monto = document.querySelector("#Monto").value;
                let fechai = document.querySelector("#Fecha").value;
                fechai = fechai.split("-");
                let fecha = new Date(fechai[0], fechai[1] - 1, fechai[2]);
                let objEmployee = 
                {
                    fecha: fecha,
                    Tipo: Tipo,
                    Monto: Monto,
                };
                let employee = new Employee(objEmployee);
                this._saldo.addEmployee(employee);
            }
        })
    }
}
let m = new Main();
