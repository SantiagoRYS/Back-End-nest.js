import { Document } from 'mongoose';
import { IProveedores } from '../interface/proveedores.interface';
export declare class Proveedores extends Document implements IProveedores {
    nombre_proveedor: string;
    email_proveedor: string;
    celular_proveedor: string;
    activo_proveedor?: boolean;
}
export declare const ProveedoresSchema: any;
