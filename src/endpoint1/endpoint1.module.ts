import { Module } from '@nestjs/common';
import { Endpoint1Resolver } from './endpoint1.resolver';
import { Endpoint2Module } from '../endpoint2/endpoint2.module';

@Module({
  // Remove next line to make it work
  imports: [Endpoint2Module],
  providers: [Endpoint1Resolver],
})
export class Endpoint1Module {}
