export default class Employee
{
    constructor(employee)
    {
        this._fecha = employee.fecha;
        this._Tipo = employee.Tipo;
        this._Monto = employee.Monto;
        this._months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octtubre",
            "Noviembre",
            "Diciembre"
        ];
        this._dias = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
        ];
    }
    //retorna dia faltante
    getFechaAsString() 
    {
        let dateN = this._dias[this._fecha.getDay()] +" "+ this._fecha.getDate() + " de " + this._months[this._fecha.getMonth()] + " del " + this._fecha.getFullYear();
        return dateN;
    }
    get fecha()
    {
        return this._fecha;
    }
    get Tipo()
    {
        return this._Tipo;
    }
    get Monto()
    {
        return this._Monto;
    }
}