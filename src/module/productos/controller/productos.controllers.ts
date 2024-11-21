import { 
    Controller, 
    Post, 
    Body, 
    Delete, 
    Param, 
    NotFoundException, 
    Get, 
    Put,
    Patch
} from '@nestjs/common';
import { ProductosServices } from '../services/productos.services';
import { CreateProductoDto } from '../dto/create-productos.dto';
import { UpdateProductosDto } from '../dto/udpate-productos.dto';
import { Productos } from '../schema/productos.schema';

// Importacion necesaria para documentar en swagger para los endpoints
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('producto') // Etiqueta para agrupar endpoints en la documentacion
@Controller('productos')
export class ProductosControllers{
    constructor(private readonly productosServices: ProductosServices){

    }

    //Controlador para crear el Producto
    @Post()
        // Descripción del endpoint
        @ApiOperation({summary: 'Crear un nuevo producto'}) 
        // Respuesta exitosa
        @ApiResponse({status: 201, description: 'El producto ha sido creado'}) 
        // Respueta de error
        @ApiResponse({status: 400, description: 'Solicitud incorrecta'})
        // Cuerpo del endpoint
        @ApiBody({
            description: 'Cuerpo de solicitud para crear un nuevo producto',
            examples:{
                example:{
                    summary: 'Ejemplo de crearción',
                    value:{
                        nombre_producto: 'Nombre__Producto',
                        cantidad: 7,
                        precio: 7000,
                        proveedor: 'Colombina',
                        cliente: 'pastor lopez',
                        estado: true
                    }
                }
            }
        })
    async create(@Body()createProductosDto: CreateProductoDto): Promise<Productos>{
        return this.productosServices.createProducto(createProductosDto);
    }

    //Controlador para desactivar
    @Put('deactive/:id')
        //Descripcion del endpoint
        @ApiOperation({summary:'Desctivar un producto'})
        //Respuesta exitosa
        @ApiResponse({status: 204, description: 'Proveedor desactivado'})
        //Resíesta de error
        @ApiResponse({status:400, description:'No se encuentra el producto'})
        // Respuesta de error
        @ApiResponse({status:404, description:'Solicitud incorrecta'})
        @ApiParam({
            name: 'id',
            required: true,
            description: 'Id del producto que desea desactivar',
            type: String,
        })
    async deactive(@Param('id') id: string): Promise<void>{
        await this.productosServices.deactive(id);
    }

    //Controlador para Activar
    @Put('active/:id')
        //Descripcion del endpoint
        @ApiOperation({summary:'Activar un producto'})
        //Respuesta exitosa
        @ApiResponse({status: 204, description: 'Producto activado'})
        //Resíesta de error
        @ApiResponse({status:400, description:'No se encuentra el producto'})
        // Respuesta de error
        @ApiResponse({status:404, description:'Solicitud incorrecta'})
        @ApiParam({
            name: 'id',
            required: true,
            description: 'Id del producto que desea activar',
            type: String,
        })
    async active(@Param('id') id: string): Promise<void>{
        await this.productosServices.active(id);
    }

    //Controlador para eliminar
    @Delete('delete/:id')
        //Descripcion del endpoint
        @ApiOperation({summary:'Eliminar un producto'})
        //Respuesta exitosa
        @ApiResponse({status: 204, description: 'Producto eliminado'})
        //Respuesta de error
        @ApiResponse({status:400, description:'No se encuentra el producto'})
        // Respuesta de error
        @ApiResponse({status:404, description:'Solicitud incorrecta'})
        @ApiParam({
            name: 'id',
            required: true,
            description: 'Id del producto que desea eliminar',
            type: String,
        })
    async delete(@Param('id') id: string): Promise<void>{
        await this.productosServices.delete(id);
    }

    //Controlador para obtener todos los productos
    @Get()
        //Descripcion endpoint
        @ApiOperation({summary: 'Obtener todos los proveedores'})
        // Respuesta de exito
        @ApiResponse({status:200, description: 'Lista de proveedores ', type:[Productos] })
        // Respuesta de error
        @ApiResponse({status: 404, description: 'Paises no encontrados'})
    async findAll(): Promise<Productos[]>{
        return await this.productosServices.findAllProdutos();
    }

    //Controlador para obtener por id
    @Get(':id')
        //Descripcion del endpoint
        @ApiOperation({summary:'Obtener un producto por su Id'})
        //Respuesta exitosa
        @ApiResponse({status: 204, description: 'Producto encontrado'})
        //Respuesta de error
        @ApiResponse({status:400, description:'No se encuentra el producto'})
        // Respuesta de error
        @ApiResponse({status:404, description:'Solicitud incorrecta'})
        @ApiParam({
            name: 'id',
            required: true,
            description: 'Id del producto que desea obtener',
            type: String,
        })
    async findOne(@Param('id') id: string): Promise<Productos>{
        console.log('ID recibido:', id); // Agrega esto para depurar
        return await this.productosServices.findOne(id);
    }

    //Controlador para actualizar todo el producto
    @Put('update/:id')
        // Descripción del endpoint
        @ApiOperation({summary: 'Actualizar de un producto'}) 
        // Respuesta exitosa
        @ApiResponse({status: 201, description: 'El producto ha sido actualizado'}) 
        // Respueta de error
        @ApiResponse({status: 400, description: 'No se encuentra el producto'})
        // Respuesta de error
        @ApiResponse({status:404, description:'Solicitud incorrecta'})
        // Cuerpo del endpoint
        @ApiBody({
            description: 'Cuerpo de solicitud para actualizar un nuevo producto',
            examples:{
                example:{
                    summary: 'Ejemplo de actualización',
                    value:{
                        nombre_producto: 'Nombre__Producto',
                        cantidad: 7,
                        precio: 7000,
                        proveedor: 'Colombina',
                        cliente: 'pastor lopez',
                        estado: true
                    }
                }
            }
        })
    async udpate(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto): Promise<Productos>{
        const updateProducto = await this.productosServices.udpate(id, updateProductosDto);
        if(!updateProducto){
            throw new NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updateProducto
    }

    //controlador para actualizar parcialmente un producto
    @Patch('updatePartial/:id')
        // Descripción del endpoint
        @ApiOperation({summary: 'Actualizar de un producto parcialmente'}) 
        // Respuesta exitosa
        @ApiResponse({status: 201, description: 'El producto ha sido actualizado'}) 
        // Respueta de error
        @ApiResponse({status: 400, description: 'No se encuentra el producto'})
        // Respuesta de error
        @ApiResponse({status:404, description:'Solicitud incorrecta'})
        // Cuerpo del endpoint
        @ApiBody({
            description: 'Cuerpo de solicitud para actualizar un nuevo producto',
            examples:{
                example:{
                    summary: 'Ejemplo de actualización',
                    value:{
                        nombre_producto: 'Nombre__Producto',
                        cantidad: 7,
                        precio: 7000,
                        proveedor: 'Colombina',
                        cliente: 'pastor lopez',
                        estado: true
                    }
                }
            }
        })
    async udpatePartial(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto): Promise<Productos>{
        const updatePartialProducto = await this.productosServices.udpatePartial(id, updateProductosDto);
        if(!updatePartialProducto){
            throw new NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updatePartialProducto
    }

        // Ruta para agregar un proveedor a un producto
        @Patch(':productoId/proveedores/:proveedorId')
        @ApiOperation({ summary: 'Agregar un proveedor a un producto' })
        @ApiResponse({ status: 200, description: 'Proveedor agregado al producto correctamente', type: Productos })
        @ApiResponse({ status: 404, description: 'Producto o proveedor no encontrado' })
        @ApiParam({
            name: 'productoId',
            required: true,
            description: 'Id del producto al que se desea agregar el proveedor',
            type: String,
        })
        @ApiParam({
            name: 'proveedorId',
            required: true,
            description: 'Id del proveedor que se desea agregar al producto',
            type: String,
        })
        async agregarProveedorProducto(
            @Param('productoId') productoId: string,
            @Param('proveedorId') proveedorId: string,
        ): Promise<Productos> {
            return await this.productosServices.agregarProveedorAProducto(productoId, proveedorId);
        }
    
        // Ruta para eliminar un proveedor de un producto
        @Patch(':productoId/proveedores/:proveedorId/eliminar')
        @ApiOperation({ summary: 'Eliminar un proveedor de un producto' })
        @ApiResponse({ status: 200, description: 'Proveedor eliminado del producto correctamente', type: Productos })
        @ApiResponse({ status: 404, description: 'Producto o proveedor no encontrado' })
        @ApiParam({
            name: 'productoId',
            required: true,
            description: 'Id del producto del cual se desea eliminar el proveedor',
            type: String,
        })
        @ApiParam({
            name: 'proveedorId',
            required: true,
            description: 'Id del proveedor que se desea eliminar del producto',
            type: String,
        })
        async eliminarProveedorProducto(
            @Param('productoId') productoId: string,
            @Param('proveedorId') proveedorId: string,
        ): Promise<Productos> {
            return await this.productosServices.eliminarProveedorDeProducto(productoId, proveedorId);
        }
    
        // Ruta para agregar un cliente a un producto
        @Patch(':productoId/clientes/:clienteId')
        @ApiOperation({ summary: 'Agregar un cliente a un producto' })
        @ApiResponse({ status: 200, description: 'Cliente agregado al producto correctamente', type: Productos })
        @ApiResponse({ status: 404, description: 'Producto o cliente no encontrado' })
        @ApiParam({
            name: 'productoId',
            required: true,
            description: 'Id del producto al que se desea agregar el cliente',
            type: String,
        })
        @ApiParam({
            name: 'clienteId',
            required: true,
            description: 'Id del cliente que se desea agregar al producto',
            type: String,
        })
        async agregarClienteAProducto(
            @Param('productoId') productoId: string,
            @Param('clienteId') clienteId: string,
        ): Promise<Productos> {
            return await this.productosServices.agregarClientesAProducto(productoId, clienteId);
        }
    
        // Ruta para eliminar un cliente de un producto
        @Patch(':productoId/clientes/:clienteId/eliminar')
        @ApiOperation({ summary: 'Eliminar un cliente de un producto' })
        @ApiResponse({ status: 200, description: 'Cliente eliminado del producto correctamente', type: Productos })
        @ApiResponse({ status: 404, description: 'Producto o cliente no encontrado' })
        @ApiParam({
            name: 'productoId',
            required: true,
            description: 'Id del producto del cual se desea eliminar el cliente',
            type: String,
        })
        @ApiParam({
            name: 'clienteId',
            required: true,
            description: 'Id del cliente que se desea eliminar del producto',
            type: String,
        })
        async eliminarCLienteDeProducto(
            @Param('productoId') productoId: string,
            @Param('clienteId') clienteId: string,
        ): Promise<Productos> {
            return await this.productosServices.eliminarClientesDeProducto(productoId, clienteId);
        }
    

}