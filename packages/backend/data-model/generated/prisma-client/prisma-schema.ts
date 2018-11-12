export const typeDefs = /* GraphQL */ `type Account {
  email: String!
  id: ID!
  name: String!
  password: String!
  profile: Profile!
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  email: String!
  name: String!
  password: String!
  profile: ProfileCreateOneWithoutAccountInput!
}

input AccountCreateOneWithoutProfileInput {
  create: AccountCreateWithoutProfileInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutProfileInput {
  email: String!
  name: String!
  password: String!
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AccountPreviousValues {
  email: String!
  id: ID!
  name: String!
  password: String!
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateInput {
  email: String
  name: String
  password: String
  profile: ProfileUpdateOneRequiredWithoutAccountInput
}

input AccountUpdateManyMutationInput {
  email: String
  name: String
  password: String
}

input AccountUpdateOneRequiredWithoutProfileInput {
  create: AccountCreateWithoutProfileInput
  update: AccountUpdateWithoutProfileDataInput
  upsert: AccountUpsertWithoutProfileInput
  connect: AccountWhereUniqueInput
}

input AccountUpdateWithoutProfileDataInput {
  email: String
  name: String
  password: String
}

input AccountUpsertWithoutProfileInput {
  update: AccountUpdateWithoutProfileDataInput!
  create: AccountCreateWithoutProfileInput!
}

input AccountWhereInput {
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profile: ProfileWhereInput
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  email: String
  id: ID
}

type AggregateAccount {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Image {
  id: ID!
  url: String!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  url: String!
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  url: String!
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateDataInput {
  url: String
}

input ImageUpdateInput {
  url: String
}

input ImageUpdateManyMutationInput {
  url: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  createdAt: DateTime!
  createdBy: Profile!
  id: ID!
  text: String!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  createdBy: ProfileCreateOneWithoutPostsInput!
  text: String!
}

input PostCreateManyWithoutCreatedByInput {
  create: [PostCreateWithoutCreatedByInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutCreatedByInput {
  text: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  createdAt: DateTime!
  id: ID!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  createdBy: ProfileUpdateOneRequiredWithoutPostsInput
  text: String
}

input PostUpdateManyMutationInput {
  text: String
}

input PostUpdateManyWithoutCreatedByInput {
  create: [PostCreateWithoutCreatedByInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input PostUpdateWithoutCreatedByDataInput {
  text: String
}

input PostUpdateWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCreatedByDataInput!
}

input PostUpsertWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCreatedByDataInput!
  create: PostCreateWithoutCreatedByInput!
}

input PostWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdBy: ProfileWhereInput
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Profile {
  account: Account!
  avatar: Image
  id: ID!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  account: AccountCreateOneWithoutProfileInput!
  avatar: ImageCreateOneInput
  name: String!
  posts: PostCreateManyWithoutCreatedByInput
}

input ProfileCreateOneWithoutAccountInput {
  create: ProfileCreateWithoutAccountInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutPostsInput {
  create: ProfileCreateWithoutPostsInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutAccountInput {
  avatar: ImageCreateOneInput
  name: String!
  posts: PostCreateManyWithoutCreatedByInput
}

input ProfileCreateWithoutPostsInput {
  account: AccountCreateOneWithoutProfileInput!
  avatar: ImageCreateOneInput
  name: String!
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  name: String!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateInput {
  account: AccountUpdateOneRequiredWithoutProfileInput
  avatar: ImageUpdateOneInput
  name: String
  posts: PostUpdateManyWithoutCreatedByInput
}

input ProfileUpdateManyMutationInput {
  name: String
}

input ProfileUpdateOneRequiredWithoutAccountInput {
  create: ProfileCreateWithoutAccountInput
  update: ProfileUpdateWithoutAccountDataInput
  upsert: ProfileUpsertWithoutAccountInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateOneRequiredWithoutPostsInput {
  create: ProfileCreateWithoutPostsInput
  update: ProfileUpdateWithoutPostsDataInput
  upsert: ProfileUpsertWithoutPostsInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutAccountDataInput {
  avatar: ImageUpdateOneInput
  name: String
  posts: PostUpdateManyWithoutCreatedByInput
}

input ProfileUpdateWithoutPostsDataInput {
  account: AccountUpdateOneRequiredWithoutProfileInput
  avatar: ImageUpdateOneInput
  name: String
}

input ProfileUpsertWithoutAccountInput {
  update: ProfileUpdateWithoutAccountDataInput!
  create: ProfileCreateWithoutAccountInput!
}

input ProfileUpsertWithoutPostsInput {
  update: ProfileUpdateWithoutPostsDataInput!
  create: ProfileCreateWithoutPostsInput!
}

input ProfileWhereInput {
  account: AccountWhereInput
  avatar: ImageWhereInput
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  node(id: ID!): Node
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
}
`