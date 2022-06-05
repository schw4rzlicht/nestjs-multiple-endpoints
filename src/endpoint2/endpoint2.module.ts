import { Module } from '@nestjs/common';
import { Endpoint2Resolver } from './endpoint2.resolver';

@Module({
  providers: [Endpoint2Resolver],
})
export class Endpoint2Module {}
