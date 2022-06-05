import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Endpoint1Module } from './endpoint1/endpoint1.module';
import { Endpoint2Module } from './endpoint2/endpoint2.module';

@Module({
  imports: [
    Endpoint1Module,
    Endpoint2Module,

    // Choose one of the two blocks below, depending on your @nestjs/graphql version installed

    // @nestjs/graphql <10
    // GraphQLModule.forRoot({
    //   typePaths: ['./gql/endpoint1.gql'],
    //   include: [Endpoint1Module],
    //   path: 'endpoint1',
    // }),
    // GraphQLModule.forRoot({
    //   typePaths: ['./gql/endpoint2.gql'],
    //   include: [Endpoint2Module],
    //   path: 'endpoint2',
    // }),

    // @nestjs/graphql >10
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./gql/endpoint1.gql'],
      include: [Endpoint1Module],
      path: 'endpoint1',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./gql/endpoint2.gql'],
      include: [Endpoint2Module],
      path: 'endpoint2',
    }),
  ],
})
export class AppModule {}
