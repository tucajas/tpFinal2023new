export interface Orden{
    id?: number;
    cliente: string;
    tipoTrabajo: string;
    materiaPrima: string;
    cantidad: number;
    fechaEntrega:string;
    detalle:string;
    estado:string;
}