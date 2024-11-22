import { UpdateClientesDto } from '../dto/update-clientes.dto';
import { CreateClientesDto } from '../dto/create-clientes.dto';
import { ClientesService } from '../service/clientes.service';
import { Clientes } from '../schema/clientes.schema';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClientesDto: CreateClientesDto): Promise<Clientes>;
    findOne(id: string): Promise<Clientes>;
    findAll(): Promise<Clientes[]>;
    active(id: string): Promise<void>;
    update(id: string, updateClientesDto: UpdateClientesDto): Promise<Clientes>;
    updatePartial(id: string, updateClientesDto: Partial<UpdateClientesDto>): Promise<Clientes>;
    remove(id: string): Promise<void>;
    deactivate(id: string): Promise<void>;
}
