export default class Asistencia
{
    constructor(employee)
    {
        this._fecha = employee.fecha;
        this._Nombre = employee.Nombre;
        this._Numero = employee.Numero;
        this._asistencia = 0;
        this._Tipo = employee.Tipo;
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
    get Nombre()
    {
        return this._Nombre;
    }
    get Numero()
    {
        return this._Numero;
    }
    get Tipo()
    {
        return this._Tipo;
    }
    get asistencia()
    {
        return this._asistencia;
    }
}