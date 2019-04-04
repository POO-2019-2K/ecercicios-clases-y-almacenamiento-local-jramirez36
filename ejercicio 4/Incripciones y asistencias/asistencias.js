import Asistencia from "./Employee-Asistencia.js";
export default class asistencia {
    constructor(Asistencias , tablainfo) {
        this._Asistencias = Asistencias;
        this._tablainfo = tablainfo;
        this._contador = 0;
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
            this._showInTable(new Asistencia(employee));
        })
    }
    _showInTable(employee) 
    {
        let Tipo = employee.Tipo;
        let Numero = employee.Numero;
        if(Tipo === "registro")
        {
            let asistencia = 0;
            let valorRevision = -1;
            this._employees.forEach((employee, index) => {
                if (employee.Numero === Numero)
                {
                valorRevision = index;
                return;
                }
                                    })
            if(valorRevision === -1)
            {
                let row = this._Asistencias.insertRow(-1);
                let cellFecha = row.insertCell(0);
                let cellNumero = row.insertCell(1);
                let cellNombre = row.insertCell(2);
                let cellAsistencias = row.insertCell(3);
                cellFecha.innerHTML = employee.getFechaAsString();
                cellNumero.innerHTML = employee.Numero;
                cellNombre.innerHTML = employee.Nombre;
                cellAsistencias.innerHTML = 0;
            this._contador++;
                alert("Registro Exitoso");
                this._tablainfo.rows[1].cells[1].innerHTML = this._contador;
                let objEmployee = {
                Nombre: employee.Nombre,
                Numero: employee.Numero,
                fecha: employee.fecha,
                asistencia: asistencia,
                Tipo: employee.Tipo,
                }
                this._employees.push(objEmployee);
            }
            else
            {
                alert("Este alumno ya a sido registrado");
            } 
        }
        else if(Tipo === "asistencia")
        {
            let asistencia = employee.asistencia;
            let valorRevision = -1;
            this._employees.forEach((employee, index) => {
                if (employee.Numero === Numero)
                {
                valorRevision = index;
                return;
                }
                                    })
            if(valorRevision === -1)
            {
                alert("Estudiante no registrado");
            }
            else
            {
                this._employees.forEach((employee, index) => {
                    if (employee.Numero === Numero)
                    {
                    employee.asistencia = Number(employee.asistencia)+1;
                    asistencia = employee.asistencia;
                    return;
                    }
                                        })
                let row = this._Asistencias.insertRow(-1);
                let cellFecha = row.insertCell(0);
                let cellNumero = row.insertCell(1);
                let cellNombre = row.insertCell(2);
                let cellAsistencias = row.insertCell(3);
                cellFecha.innerHTML = employee.getFechaAsString();
                cellNumero.innerHTML = employee.Numero;
                cellNombre.innerHTML = employee.Nombre;
                cellAsistencias.innerHTML = asistencia;
                let objEmployee = {
                Nombre: employee.Nombre,
                Numero: employee.Numero,
                fecha: employee.fecha,
                asistencia: asistencia,
                Tipo: employee.Tipo,
                }
                this._employees.push(objEmployee);
            } 
        }
        
    }
    addEmployee(employee) {
            this._showInTable(employee);
            localStorage.setItem("employees", JSON.stringify(this._employees));
        }
}