# Multiple endpoints demo

Apparently, `@nestjs/graphql > 10` broke the ability to use multiple endpoints when modules depend on each other.

## Instructions

```shell
npm ci
npm run start:dev
```

You will see that it's not working:

```
Error: Query.endpoint2 defined in resolvers, but not in schema
```

### How to make it work

#### Downgrade `@nestjs/graphql`

Change `@nestjs/graphql` version to `9.1.2` in `package.json`. Run `npm i`.
Navigate to `src/app.module.ts` and follow the instructions there.

Run `npm run start:dev` again and see that it's working.

#### Remove module dependency

Currently, `Endpoint2Module` is a dependency of `Endpoint1Module`. This is of course only
for demo purposes, there is no real dependency here. Just go ahead and follow the instructions in
`src/endpoint1/endpoint1.module.ts`.

Run `npm run start:dev` again and see that it's working.
