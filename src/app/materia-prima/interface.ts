import { Proveedor } from "../proveedores/interface";

export interface MateriaPrima {
    id? : number;
    descripcion:string;
    precioCosto: number;
    proveedor: [];
}