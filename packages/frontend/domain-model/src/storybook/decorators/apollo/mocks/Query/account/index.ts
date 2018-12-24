export default () => ({
  email: "account@email.com",
  id: "account_id",
  name: "Account",
  profile: () => ({
    avatar: () => null,
    followers: () => ([]),
    following: () => ([]),
    id: "profile_id",
    name: "Profile",
  }),
});
