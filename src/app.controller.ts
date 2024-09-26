import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, ParseIntPipe, Post, Query, Req } from '@nestjs/common';

import { ProductsService } from './service/products.service';
import { Product } from './entity/product.entity';
// import * as session from 'express-session';
import { Request } from 'express';

@Controller('api/v1/products')
export class AppController {

  // dependency injection
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(200)
  async getAll(@Req() request: Request): Promise<Product[]> {
    //request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
    try {
      return await this.productsService.findAll()
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'No Products Available'
      },HttpStatus.NOT_FOUND,{
        cause: err
      })
    }
  }

  @Post()
  @HttpCode(201)
  save(@Body() product: Product): Promise<Product> {
    return this.productsService.addNewProduct(product)
  }

  @Get('id')
  @HttpCode(200)
  getById(@Query("id",
    new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number): Promise<Product> {
    return this.productsService.findOne(id)
  }

}

