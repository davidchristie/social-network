export default `
  schema {
    query: Query
  }

  type Account {
    email: String!
    id: ID!
    name: String!
    profile: Profile!
  }

  type Image {
    id: ID!
    url: String!
  }

  type Post {
    createdAt: String!
    createdBy: Profile!
    id: ID!
    text: String!
  }

  type Profile {
    avatar: Image
    id: ID!
    followers: [Profile!]!
    following: [Profile!]!
    name: String!
    posts: [Post!]!
  }

  type Query {
    account: Account
    profile(id: String!): Profile
  }
`;
