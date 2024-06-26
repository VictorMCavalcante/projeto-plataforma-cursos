// import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { AuthorizationGuard } from 'src/http/authorization/authorization.guard';
import { Product } from '../models/product';
import { ProductsService } from '../../services/product.service';
import { CreateProductInput } from '../inputs/create-product-input';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
    {
    }
  }
}
