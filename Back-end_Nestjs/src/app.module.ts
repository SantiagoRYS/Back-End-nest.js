/* import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresModule } from './module/proveedores/proveedores.module';
import { ProductosModule } from './module/productos/productos.module';
import { ClientesModule } from './module/clientes/clientes.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/Producto_Proveedor"),
  ProveedoresModule,
  ProductosModule,
  ClientesModule
  ],
  

})
export class AppModule {} */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './module/auth/auth.module';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 5000,
      limit: 1,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/Pruebados'),
    AuthModule,
    BookModule,
  ],
})
export class AppModule {}
