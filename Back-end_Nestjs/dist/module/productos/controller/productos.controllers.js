"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosControllers = void 0;
const common_1 = require("@nestjs/common");
const productos_services_1 = require("../services/productos.services");
const create_productos_dto_1 = require("../dto/create-productos.dto");
const udpate_productos_dto_1 = require("../dto/udpate-productos.dto");
const productos_schema_1 = require("../schema/productos.schema");
const swagger_1 = require("@nestjs/swagger");
let ProductosControllers = class ProductosControllers {
    constructor(productosServices) {
        this.productosServices = productosServices;
    }
    async create(createProductosDto) {
        return this.productosServices.createProducto(createProductosDto);
    }
    async deactive(id) {
        await this.productosServices.deactive(id);
    }
    async active(id) {
        await this.productosServices.active(id);
    }
    async delete(id) {
        await this.productosServices.delete(id);
    }
    async findAll() {
        return await this.productosServices.findAllProdutos();
    }
    async findOne(id) {
        console.log('ID recibido:', id);
        return await this.productosServices.findOne(id);
    }
    async udpate(id, updateProductosDto) {
        const updateProducto = await this.productosServices.udpate(id, updateProductosDto);
        if (!updateProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updateProducto;
    }
    async udpatePartial(id, updateProductosDto) {
        const updatePartialProducto = await this.productosServices.udpatePartial(id, updateProductosDto);
        if (!updatePartialProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updatePartialProducto;
    }
    async agregarProveedorProducto(productoId, proveedorId) {
        return await this.productosServices.agregarProveedorAProducto(productoId, proveedorId);
    }
    async eliminarProveedorProducto(productoId, proveedorId) {
        return await this.productosServices.eliminarProveedorDeProducto(productoId, proveedorId);
    }
    async agregarClienteAProducto(productoId, clienteId) {
        return await this.productosServices.agregarClientesAProducto(productoId, clienteId);
    }
    async eliminarCLienteDeProducto(productoId, clienteId) {
        return await this.productosServices.eliminarClientesDeProducto(productoId, clienteId);
    }
};
exports.ProductosControllers = ProductosControllers;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo producto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El producto ha sido creado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiBody)({
        description: 'Cuerpo de solicitud para crear un nuevo producto',
        examples: {
            example: {
                summary: 'Ejemplo de crearción',
                value: {
                    nombre_producto: 'Nombre__Producto',
                    cantidad: 7,
                    precio: 7000,
                    proveedor: 'Colombina',
                    cliente: 'pastor lopez',
                    estado: true
                }
            }
        }
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_productos_dto_1.CreateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "create", null);
__decorate([
    (0, common_1.Put)('deactive/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Desctivar un producto' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Proveedor desactivado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el producto' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del producto que desea desactivar',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "deactive", null);
__decorate([
    (0, common_1.Put)('active/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Activar un producto' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Producto activado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el producto' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del producto que desea activar',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "active", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un producto' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Producto eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el producto' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del producto que desea eliminar',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los proveedores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de proveedores ', type: [productos_schema_1.Productos] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paises no encontrados' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un producto por su Id' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Producto encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el producto' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del producto que desea obtener',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar de un producto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El producto ha sido actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el producto' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiBody)({
        description: 'Cuerpo de solicitud para actualizar un nuevo producto',
        examples: {
            example: {
                summary: 'Ejemplo de actualización',
                value: {
                    nombre_producto: 'Nombre__Producto',
                    cantidad: 7,
                    precio: 7000,
                    proveedor: 'Colombina',
                    cliente: 'pastor lopez',
                    estado: true
                }
            }
        }
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, udpate_productos_dto_1.UpdateProductosDto]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "udpate", null);
__decorate([
    (0, common_1.Patch)('updatePartial/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar de un producto parcialmente' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El producto ha sido actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el producto' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiBody)({
        description: 'Cuerpo de solicitud para actualizar un nuevo producto',
        examples: {
            example: {
                summary: 'Ejemplo de actualización',
                value: {
                    nombre_producto: 'Nombre__Producto',
                    cantidad: 7,
                    precio: 7000,
                    proveedor: 'Colombina',
                    cliente: 'pastor lopez',
                    estado: true
                }
            }
        }
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, udpate_productos_dto_1.UpdateProductosDto]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "udpatePartial", null);
__decorate([
    (0, common_1.Patch)(':productoId/proveedores/:proveedorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar un proveedor a un producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Proveedor agregado al producto correctamente', type: productos_schema_1.Productos }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto o proveedor no encontrado' }),
    (0, swagger_1.ApiParam)({
        name: 'productoId',
        required: true,
        description: 'Id del producto al que se desea agregar el proveedor',
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'proveedorId',
        required: true,
        description: 'Id del proveedor que se desea agregar al producto',
        type: String,
    }),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('proveedorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "agregarProveedorProducto", null);
__decorate([
    (0, common_1.Patch)(':productoId/proveedores/:proveedorId/eliminar'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un proveedor de un producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Proveedor eliminado del producto correctamente', type: productos_schema_1.Productos }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto o proveedor no encontrado' }),
    (0, swagger_1.ApiParam)({
        name: 'productoId',
        required: true,
        description: 'Id del producto del cual se desea eliminar el proveedor',
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'proveedorId',
        required: true,
        description: 'Id del proveedor que se desea eliminar del producto',
        type: String,
    }),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('proveedorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "eliminarProveedorProducto", null);
__decorate([
    (0, common_1.Patch)(':productoId/clientes/:clienteId'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar un cliente a un producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cliente agregado al producto correctamente', type: productos_schema_1.Productos }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto o cliente no encontrado' }),
    (0, swagger_1.ApiParam)({
        name: 'productoId',
        required: true,
        description: 'Id del producto al que se desea agregar el cliente',
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'clienteId',
        required: true,
        description: 'Id del cliente que se desea agregar al producto',
        type: String,
    }),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "agregarClienteAProducto", null);
__decorate([
    (0, common_1.Patch)(':productoId/clientes/:clienteId/eliminar'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un cliente de un producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cliente eliminado del producto correctamente', type: productos_schema_1.Productos }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto o cliente no encontrado' }),
    (0, swagger_1.ApiParam)({
        name: 'productoId',
        required: true,
        description: 'Id del producto del cual se desea eliminar el cliente',
        type: String,
    }),
    (0, swagger_1.ApiParam)({
        name: 'clienteId',
        required: true,
        description: 'Id del cliente que se desea eliminar del producto',
        type: String,
    }),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "eliminarCLienteDeProducto", null);
exports.ProductosControllers = ProductosControllers = __decorate([
    (0, swagger_1.ApiTags)('producto'),
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_services_1.ProductosServices])
], ProductosControllers);
//# sourceMappingURL=productos.controllers.js.map