import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductsService } from './service/products.service';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'productsdb',
      entities: [Product],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Product])
  ],

  controllers: [AppController],
  providers: [AppService,ProductsService],
})
export class AppModule {}

// nestjs => angular + spring boot
