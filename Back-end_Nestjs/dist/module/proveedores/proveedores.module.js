"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedoresModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const proveedores_service_1 = require("./service/proveedores.service");
const proveedores_controller_1 = require("./controller/proveedores.controller");
const proveedores_schema_1 = require("./schema/proveedores.schema");
let ProveedoresModule = class ProveedoresModule {
};
exports.ProveedoresModule = ProveedoresModule;
exports.ProveedoresModule = ProveedoresModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: proveedores_schema_1.Proveedores.name,
                    schema: proveedores_schema_1.ProveedoresSchema,
                }])],
        controllers: [proveedores_controller_1.ProveedoresController],
        providers: [proveedores_service_1.ProveedoresServices],
        exports: [proveedores_service_1.ProveedoresServices]
    })
], ProveedoresModule);
//# sourceMappingURL=proveedores.module.js.map