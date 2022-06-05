import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class Endpoint1Resolver {
  @Query()
  endpoint1() {
    return 'Hello from endpoint 1!';
  }
}
