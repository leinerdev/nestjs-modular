import { Module } from '@nestjs/common';

import { CustomersService } from './services/customer.service';
import { UsersService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { CustomerController } from './controllers/customers.controller';
import { ProductsService } from 'src/products/services/products.service';

@Module({
  controllers: [UsersController, CustomerController],
  providers: [CustomersService, UsersService, ProductsService],
})
export class UsersModule {}
