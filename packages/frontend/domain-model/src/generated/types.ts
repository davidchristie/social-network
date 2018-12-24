

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost {
  __typename: "Post";
  id: string;
  text: string;
}

export interface CreatePost {
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  text: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePost
// ====================================================

export interface DeletePost_deletePost {
  __typename: "Post";
  id: string;
}

export interface DeletePost {
  deletePost: DeletePost_deletePost;
}

export interface DeletePostVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FollowProfile
// ====================================================

export interface FollowProfile_followProfile_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface FollowProfile_followProfile {
  __typename: "Profile";
  avatar: FollowProfile_followProfile_avatar | null;
  id: string;
  name: string;
}

export interface FollowProfile {
  followProfile: FollowProfile_followProfile;
}

export interface FollowProfileVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "LoginPayload";
  token: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup {
  __typename: "LoginPayload";
  token: string;
}

export interface Signup {
  signup: Signup_signup;
}

export interface SignupVariables {
  email: string;
  name: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnfollowProfile
// ====================================================

export interface UnfollowProfile_unfollowProfile {
  __typename: "Profile";
  id: string;
}

export interface UnfollowProfile {
  unfollowProfile: UnfollowProfile_unfollowProfile;
}

export interface UnfollowProfileVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateAccount
// ====================================================

export interface UpdateAccount_updateAccount {
  __typename: "Account";
  email: string;
  id: string;
}

export interface UpdateAccount {
  updateAccount: UpdateAccount_updateAccount;
}

export interface UpdateAccountVariables {
  data: AccountUpdateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePassword
// ====================================================

export interface UpdatePassword_updatePassword {
  __typename: "Account";
  id: string;
}

export interface UpdatePassword {
  updatePassword: UpdatePassword_updatePassword;
}

export interface UpdatePasswordVariables {
  data: PasswordUpdateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateProfile_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface UpdateProfile_updateProfile {
  __typename: "Profile";
  avatar: UpdateProfile_updateProfile_avatar | null;
  id: string;
  name: string;
}

export interface UpdateProfile {
  updateProfile: UpdateProfile_updateProfile;
}

export interface UpdateProfileVariables {
  data: ProfileUpdateInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Account
// ====================================================

export interface Account_account_profile_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface Account_account_profile_followers_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface Account_account_profile_followers {
  __typename: "Profile";
  avatar: Account_account_profile_followers_avatar | null;
  id: string;
  name: string;
}

export interface Account_account_profile_following_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface Account_account_profile_following {
  __typename: "Profile";
  avatar: Account_account_profile_following_avatar | null;
  id: string;
  name: string;
}

export interface Account_account_profile {
  __typename: "Profile";
  avatar: Account_account_profile_avatar | null;
  followers: Account_account_profile_followers[];
  following: Account_account_profile_following[];
  id: string;
  name: string;
}

export interface Account_account {
  __typename: "Account";
  email: string;
  id: string;
  name: string;
  profile: Account_account_profile;
}

export interface Account {
  account: Account_account | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Profile
// ====================================================

export interface Profile_profile_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface Profile_profile_following_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface Profile_profile_following {
  __typename: "Profile";
  avatar: Profile_profile_following_avatar | null;
  id: string;
  name: string;
}

export interface Profile_profile_posts_createdBy_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface Profile_profile_posts_createdBy {
  __typename: "Profile";
  avatar: Profile_profile_posts_createdBy_avatar | null;
  id: string;
  name: string;
}

export interface Profile_profile_posts {
  __typename: "Post";
  createdAt: any;
  createdBy: Profile_profile_posts_createdBy;
  id: string;
  text: string;
}

export interface Profile_profile {
  __typename: "Profile";
  avatar: Profile_profile_avatar | null;
  id: string;
  following: Profile_profile_following[];
  name: string;
  posts: Profile_profile_posts[];
}

export interface Profile {
  profile: Profile_profile | null;
}

export interface ProfileVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Profiles
// ====================================================

export interface Profiles_profiles {
  __typename: "Profile";
  id: string;
  name: string;
}

export interface Profiles {
  profiles: Profiles_profiles[];
}

export interface ProfilesVariables {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  orderBy?: ProfileOrderByInput | null;
  skip?: number | null;
  where?: ProfileWhereInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Image
// ====================================================

export interface Image {
  __typename: "Image";
  id: string;
  url: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostSummary
// ====================================================

export interface PostSummary_createdBy_avatar {
  __typename: "Image";
  id: string;
  url: string;
}

export interface PostSummary_createdBy {
  __typename: "Profile";
  avatar: PostSummary_createdBy_avatar | null;
  id: string;
  name: string;
}

export interface PostSummary {
  __typename: "Post";
  createdAt: any;
  createdBy: PostSummary_createdBy;
  id: string;
  text: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ProfileOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

// 
export interface AccountUpdateInput {
  email?: string | null;
}

// 
export interface PasswordUpdateInput {
  currentPassword: string;
  newPassword: string;
}

// 
export interface ProfileUpdateInput {
  avatarUrl?: string | null;
  followers?: ProfileUpdateManyWithoutFollowingInput | null;
  following?: ProfileUpdateManyWithoutFollowersInput | null;
  name?: string | null;
}

// 
export interface ProfileUpdateManyWithoutFollowingInput {
  create?: ProfileCreateWithoutFollowingInput[] | null;
  delete?: ProfileWhereUniqueInput[] | null;
  connect?: ProfileWhereUniqueInput[] | null;
  disconnect?: ProfileWhereUniqueInput[] | null;
  update?: ProfileUpdateWithWhereUniqueWithoutFollowingInput[] | null;
  upsert?: ProfileUpsertWithWhereUniqueWithoutFollowingInput[] | null;
}

// 
export interface ProfileCreateWithoutFollowingInput {
  account: AccountCreateOneWithoutProfileInput;
  avatar?: ImageCreateOneInput | null;
  followers?: ProfileCreateManyWithoutFollowingInput | null;
  name: string;
  posts?: PostCreateManyWithoutCreatedByInput | null;
}

// 
export interface AccountCreateOneWithoutProfileInput {
  create?: AccountCreateWithoutProfileInput | null;
  connect?: AccountWhereUniqueInput | null;
}

// 
export interface AccountCreateWithoutProfileInput {
  email: string;
  name: string;
  password: string;
}

// 
export interface AccountWhereUniqueInput {
  email?: string | null;
  id?: string | null;
}

// 
export interface ImageCreateOneInput {
  create?: ImageCreateInput | null;
  connect?: ImageWhereUniqueInput | null;
}

// 
export interface ImageCreateInput {
  url: string;
}

// 
export interface ImageWhereUniqueInput {
  id?: string | null;
}

// 
export interface ProfileCreateManyWithoutFollowingInput {
  create?: ProfileCreateWithoutFollowingInput[] | null;
  connect?: ProfileWhereUniqueInput[] | null;
}

// 
export interface ProfileWhereUniqueInput {
  id?: string | null;
}

// 
export interface PostCreateManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[] | null;
  connect?: PostWhereUniqueInput[] | null;
}

// 
export interface PostCreateWithoutCreatedByInput {
  text: string;
}

// 
export interface PostWhereUniqueInput {
  id?: string | null;
}

// 
export interface ProfileUpdateWithWhereUniqueWithoutFollowingInput {
  where: ProfileWhereUniqueInput;
  data: ProfileUpdateWithoutFollowingDataInput;
}

// 
export interface ProfileUpdateWithoutFollowingDataInput {
  account?: AccountUpdateOneRequiredWithoutProfileInput | null;
  avatar?: ImageUpdateOneInput | null;
  followers?: ProfileUpdateManyWithoutFollowingInput | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutCreatedByInput | null;
}

// 
export interface AccountUpdateOneRequiredWithoutProfileInput {
  create?: AccountCreateWithoutProfileInput | null;
  update?: AccountUpdateWithoutProfileDataInput | null;
  upsert?: AccountUpsertWithoutProfileInput | null;
  connect?: AccountWhereUniqueInput | null;
}

// 
export interface AccountUpdateWithoutProfileDataInput {
  email?: string | null;
  name?: string | null;
  password?: string | null;
}

// 
export interface AccountUpsertWithoutProfileInput {
  update: AccountUpdateWithoutProfileDataInput;
  create: AccountCreateWithoutProfileInput;
}

// 
export interface ImageUpdateOneInput {
  create?: ImageCreateInput | null;
  update?: ImageUpdateDataInput | null;
  upsert?: ImageUpsertNestedInput | null;
  delete?: boolean | null;
  disconnect?: boolean | null;
  connect?: ImageWhereUniqueInput | null;
}

// 
export interface ImageUpdateDataInput {
  url?: string | null;
}

// 
export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput;
  create: ImageCreateInput;
}

// 
export interface PostUpdateManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[] | null;
  delete?: PostWhereUniqueInput[] | null;
  connect?: PostWhereUniqueInput[] | null;
  disconnect?: PostWhereUniqueInput[] | null;
  update?: PostUpdateWithWhereUniqueWithoutCreatedByInput[] | null;
  upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput[] | null;
}

// 
export interface PostUpdateWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutCreatedByDataInput;
}

// 
export interface PostUpdateWithoutCreatedByDataInput {
  text?: string | null;
}

// 
export interface PostUpsertWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutCreatedByDataInput;
  create: PostCreateWithoutCreatedByInput;
}

// 
export interface ProfileUpsertWithWhereUniqueWithoutFollowingInput {
  where: ProfileWhereUniqueInput;
  update: ProfileUpdateWithoutFollowingDataInput;
  create: ProfileCreateWithoutFollowingInput;
}

// 
export interface ProfileUpdateManyWithoutFollowersInput {
  create?: ProfileCreateWithoutFollowersInput[] | null;
  delete?: ProfileWhereUniqueInput[] | null;
  connect?: ProfileWhereUniqueInput[] | null;
  disconnect?: ProfileWhereUniqueInput[] | null;
  update?: ProfileUpdateWithWhereUniqueWithoutFollowersInput[] | null;
  upsert?: ProfileUpsertWithWhereUniqueWithoutFollowersInput[] | null;
}

// 
export interface ProfileCreateWithoutFollowersInput {
  account: AccountCreateOneWithoutProfileInput;
  avatar?: ImageCreateOneInput | null;
  following?: ProfileCreateManyWithoutFollowersInput | null;
  name: string;
  posts?: PostCreateManyWithoutCreatedByInput | null;
}

// 
export interface ProfileCreateManyWithoutFollowersInput {
  create?: ProfileCreateWithoutFollowersInput[] | null;
  connect?: ProfileWhereUniqueInput[] | null;
}

// 
export interface ProfileUpdateWithWhereUniqueWithoutFollowersInput {
  where: ProfileWhereUniqueInput;
  data: ProfileUpdateWithoutFollowersDataInput;
}

// 
export interface ProfileUpdateWithoutFollowersDataInput {
  account?: AccountUpdateOneRequiredWithoutProfileInput | null;
  avatar?: ImageUpdateOneInput | null;
  following?: ProfileUpdateManyWithoutFollowersInput | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutCreatedByInput | null;
}

// 
export interface ProfileUpsertWithWhereUniqueWithoutFollowersInput {
  where: ProfileWhereUniqueInput;
  update: ProfileUpdateWithoutFollowersDataInput;
  create: ProfileCreateWithoutFollowersInput;
}

// 
export interface ProfileWhereInput {
  account?: AccountWhereInput | null;
  avatar?: ImageWhereInput | null;
  followers_every?: ProfileWhereInput | null;
  followers_some?: ProfileWhereInput | null;
  followers_none?: ProfileWhereInput | null;
  following_every?: ProfileWhereInput | null;
  following_some?: ProfileWhereInput | null;
  following_none?: ProfileWhereInput | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  posts_every?: PostWhereInput | null;
  posts_some?: PostWhereInput | null;
  posts_none?: PostWhereInput | null;
  AND?: ProfileWhereInput[] | null;
  OR?: ProfileWhereInput[] | null;
  NOT?: ProfileWhereInput[] | null;
}

// 
export interface AccountWhereInput {
  email?: string | null;
  email_not?: string | null;
  email_in?: string[] | null;
  email_not_in?: string[] | null;
  email_lt?: string | null;
  email_lte?: string | null;
  email_gt?: string | null;
  email_gte?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  password?: string | null;
  password_not?: string | null;
  password_in?: string[] | null;
  password_not_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_contains?: string | null;
  password_not_contains?: string | null;
  password_starts_with?: string | null;
  password_not_starts_with?: string | null;
  password_ends_with?: string | null;
  password_not_ends_with?: string | null;
  profile?: ProfileWhereInput | null;
  AND?: AccountWhereInput[] | null;
  OR?: AccountWhereInput[] | null;
  NOT?: AccountWhereInput[] | null;
}

// 
export interface ImageWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  url?: string | null;
  url_not?: string | null;
  url_in?: string[] | null;
  url_not_in?: string[] | null;
  url_lt?: string | null;
  url_lte?: string | null;
  url_gt?: string | null;
  url_gte?: string | null;
  url_contains?: string | null;
  url_not_contains?: string | null;
  url_starts_with?: string | null;
  url_not_starts_with?: string | null;
  url_ends_with?: string | null;
  url_not_ends_with?: string | null;
  AND?: ImageWhereInput[] | null;
  OR?: ImageWhereInput[] | null;
  NOT?: ImageWhereInput[] | null;
}

// 
export interface PostWhereInput {
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  createdBy?: ProfileWhereInput | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  text?: string | null;
  text_not?: string | null;
  text_in?: string[] | null;
  text_not_in?: string[] | null;
  text_lt?: string | null;
  text_lte?: string | null;
  text_gt?: string | null;
  text_gte?: string | null;
  text_contains?: string | null;
  text_not_contains?: string | null;
  text_starts_with?: string | null;
  text_not_starts_with?: string | null;
  text_ends_with?: string | null;
  text_not_ends_with?: string | null;
  AND?: PostWhereInput[] | null;
  OR?: PostWhereInput[] | null;
  NOT?: PostWhereInput[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================