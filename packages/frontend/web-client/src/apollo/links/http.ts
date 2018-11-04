import { HttpLink } from "apollo-link-http";

const PRODUCTION_API_ENDPOINT = "https://api.social-network.davidchristie.io";

export default new HttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT || PRODUCTION_API_ENDPOINT,
});
