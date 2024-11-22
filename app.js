import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod.ts";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import { oakCors } from "https://deno.land/x/cors/mod.ts";




const GraphQLService = await applyGraphQL({
  Router, 
  typeDefs,
  resolvers,
});

const app = new Application();
app.use(oakCors());

// Apply the GraphQL service to the app
app.use(GraphQLService.routes());
app.use(GraphQLService.allowedMethods());

console.log("GraphQL API running on http://localhost:4000/graphql");
await app.listen({ port: 4000 });
