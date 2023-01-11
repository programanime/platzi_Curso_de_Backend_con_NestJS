import { Injectable } from '@nestjs/common';
import { Product } from "../entities/product.entity";
@Injectable()
export class ProductsService {
  private current_id = 2;
  private products: Product[] = [{
    id: 1,
    name: "Product 1",
    description: "some description",
    price: 122,
    image: "",
    stock: 12
  }];

  findAll(){
    return this.products;
  }

  findOne(id: number){
    return this.products.find((p) => p.id == id);
  }

  create(payload: any){
    const newProduct = {
      id: this.current_id++,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id:number){
    const product = this.findOne(id);
    this.products = this.products.filter((p) => p.id != id);
    return product;
  }

  update(id: number, payload: any) {
    const index = this.products.findIndex((p) => p.id == id);
    const newProduct = { id, ...payload };
    this.products.splice(index, 1, newProduct);
    return newProduct;
  }
}
