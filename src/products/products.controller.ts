import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductsService } from './products.service';
import { ParseIntPipe } from './../common/parse-int.pipe';
import { CreateProductDTO, UpdateProductDTO } from './../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService){}

  //curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"name 2\", \"description\":\"description 1\",\"price\":100,\"image\":\"image.png\",\"stock\":2}" http://localhost:3000/products
  //curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"name 2\", \"description\":\"description 1\",\"price\":\"todo\",\"image\":\"image.png\",\"stock\":2}" http://localhost:3000/products
  // curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"name 2\", \"description\":\"description 1\",\"price\":103,\"image\":\"image.png\",\"stock\":2, \"other\":5646}" http://localhost:3000/products
  @Post()
  save(@Body() body: CreateProductDTO) : any{
    const result = this.productsService.create(body);
    return result;
  }

  //curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"name 2\", \"description\":\"description 1\",\"price\":100,\"image\":\"put.png\",\"stock\":2}" http://localhost:3000/products/1
  @Put(":id")
  update(@Param("id") id: number, @Body() body: UpdateProductDTO) : any{
    const result = this.productsService.update(id, body);
    return result;
  }


  // curl -I -X GET -H "Content-Type: application/json" http://localhost:3000/products
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  // curl -I -X GET -H "Content-Type: application/json" http://localhost:3000/products/1
  // curl -I -X GET -H "Content-Type: application/json" http://localhost:3000/products/100
  // curl -I -X GET -H "Content-Type: application/json" http://localhost:3000/products/dani
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Product {
    const product = this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  //curl -I -X DELETE -H "Content-Type: application/json" http://localhost:3000/products/1
  //curl -I -X DELETE -H "Content-Type: application/json" http://localhost:3000/products/1
  @Delete(":id")
  delete(@Param('id') id: number) : Product {
    const product = this.productsService.delete(id);
    if(!product){
      throw new NotFoundException('Product Not found');
    }
    return product;
  }
}
