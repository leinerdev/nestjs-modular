import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { UsersService } from 'src/users/services/user.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, UsersService, BrandsService, CategoriesService],
})
export class ProductsModule {}
