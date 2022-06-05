import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class Endpoint2Resolver {
  @Query()
  endpoint2() {
    return 'Hello from endpoint 2';
  }
}
