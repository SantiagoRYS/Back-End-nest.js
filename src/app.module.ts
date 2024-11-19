import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresModule } from './module/proveedores/proveedores.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/Producto_Proveedor"),
  ProveedoresModule
  ],
  

})
export class AppModule {}
