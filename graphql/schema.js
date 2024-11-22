import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    postsByUser(userId: ID!): [Post]
  }
`;
