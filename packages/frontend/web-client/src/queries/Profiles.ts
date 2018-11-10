import gql from "graphql-tag";

export interface ProfilesData {
  profiles: Array<{
    id: string;
    name: string;
  }>;
}

export interface ProfilesVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy?: any;
  skip?: number;
  where?: {
    name_contains?: string;
  };
}

const Profiles = gql`
  query Profiles($after: String, $before: String, $first: Int, $last: Int, $orderBy: ProfileOrderByInput, $skip: Int, $where: ProfileWhereInput) {
    profiles(after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy, skip: $skip, where: $where) {
      id
      name
    }
  }
`;

export default Profiles;
