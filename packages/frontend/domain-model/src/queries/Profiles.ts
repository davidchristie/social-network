import gql from "graphql-tag";

const Profiles = gql`
  query Profiles($after: String, $before: String, $first: Int, $last: Int, $orderBy: ProfileOrderByInput, $skip: Int, $where: ProfileWhereInput) {
    profiles(after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy, skip: $skip, where: $where) {
      id
      name
    }
  }
`;

export default Profiles;
