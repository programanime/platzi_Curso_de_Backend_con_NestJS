import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskController } from './tasks/task.controller';
import { AppService } from './app.service';
import { TaskService } from './tasks/task.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { CategoriesController } from './categories/categories.controller';
import { BrandsController } from './brands/brands.controller';
import { BrandsnestController } from './g/brandsnest/brandsnest.controller';
import { OrdersController } from './orders/orders.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    AppController,
    TaskController,
    CategoriesController,
    BrandsController,
    BrandsnestController,
    OrdersController,
    UsersController
  ],
  providers: [
    AppService,
    TaskService,
    ProductsService
  ],
})
export class AppModule {}
