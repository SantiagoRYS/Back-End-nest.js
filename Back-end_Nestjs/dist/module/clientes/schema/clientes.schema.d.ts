import { Document } from 'mongoose';
import { IClientes } from '../interface/clientes.inteface';
export declare class Clientes extends Document implements IClientes {
    numero_identificacion: string;
    nombre_cliente: string;
    email_cliente: string;
    celular_cliente: string;
    activo_cliente?: boolean;
}
export declare const ClientesSchema: any;
