import gql from "graphql-tag";

export interface SignupData {
  signup: {
    token: string;
  };
}

export interface SignupVariables {
  email: string;
  name: string;
  password: string;
}

export default gql`
  mutation Signup($email: String! $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
    }
  }
`;
