import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './services/product.service';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { PurchasesService } from './services/purchases.service';
import { CustomersResolver } from './graphql/resolvers/costumers.resolver';
import { CustomersService } from './services/costumers.service';
import { KafkaService } from 'src/messaging/kafka.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    PurchasesResolver,
    PurchasesService,
    CustomersResolver,
    CustomersService,
    KafkaService,
  ],
})
export class HttpModule {}
