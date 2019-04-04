import Employee from "./Employee.js";
export default class saldo {
    constructor(movimientos, tablainfo) {
        this._movimientos = movimientos;
        this._tablainfo = tablainfo;
        this._contadorR = 0;
        this._contadorD = 0;
        this._contadorS = 10000;
        //variables localstorage
        this._employees = [];
        this._initTable();
    }

    _initTable() {
        //localStorage.removeItem("employees")
        let employees = JSON.parse(localStorage.getItem("employees"));
        if(employees === null)
        {
            return ;
        }
        employees.forEach((employee, index) => {
            employee.fecha = new Date(employee.fecha);
            this._showInTable(new Employee(employee));
        })
    }
    _showInTable(employee) 
    {
        let row = this._movimientos.insertRow(-1);
        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellMonto = row.insertCell(2);
        let cellSaldo = row.insertCell(3);
        cellFecha.innerHTML = employee.getFechaAsString();
        cellTipo.innerHTML = employee.Tipo;
        cellMonto.innerHTML = employee.Monto;
        cellSaldo.innerHTML = this._contadorS;
        let Tipo = employee.Tipo;
        let Movimiento = employee.Monto;
        let Saldo = Number(this._contadorS);
        //Tipo de movimiento
        if (Tipo === "Retiro") 
            {
                this._contadorR = Number(this._contadorR) + Number(Movimiento);
                this._contadorS = Saldo - Number(Movimiento);
            } 
        else if (Tipo === "Deposito") 
            {
                this._contadorD = Number(this._contadorD) + Number(Movimiento);
                this._contadorS = Saldo + Number(Movimiento);
            }
        Saldo = this._contadorS;
        //tabla pequeña de valores
        this._tablainfo.rows[1].cells[1].innerHTML = this._contadorR;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorD;
        this._tablainfo.rows[3].cells[1].innerHTML = this._contadorS;
        let objEmployee = {
            fecha: employee.fecha,
            Tipo: employee.Tipo,
            Monto: employee.Monto,
        }
        this._employees.push(objEmployee);
    }
    addEmployee(employee) {
            this._showInTable(employee);
            localStorage.setItem("employees", JSON.stringify(this._employees));
        }
}