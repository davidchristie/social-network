import { ProfileVariables } from "../../../../../../generated/types";
import followers from "./followers";
import following from "./following";

export default ({ id }: ProfileVariables) => ({
  avatar: () => null,
  followers,
  following,
  id,
  name: "Profile",
});
