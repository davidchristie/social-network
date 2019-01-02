import followers from "./followers";
import following from "./following";

export interface ProfileVariables {
  id: string;
}

export default ({ id }: ProfileVariables) => ({
  avatar: () => null,
  followers,
  following,
  id,
  name: "Profile",
});
