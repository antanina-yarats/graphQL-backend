import { users, posts } from "../mockData.js";

export const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((u) => u.id === parseInt(args.id)),
    posts: () => posts,
    postsByUser: (_, args) => posts.filter((p) => p.userId === parseInt(args.userId)),
  },
  User: {
    posts: (parent) => posts.filter((p) => p.userId === parent.id),
  },
  Post: {
    user: (parent) => users.find((u) => u.id === parent.userId),
  },
};
