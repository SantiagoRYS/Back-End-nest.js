import { Document } from "mongoose";
import { IProductos } from "../interface/produectos.interface";
export declare class Productos extends Document implements IProductos {
    nombre_producto: string;
    cantidad: number;
    precio: number;
    proveedor?: string[];
    cliente?: string[];
    activo?: boolean;
}
export declare const ProductoSchema: any;
