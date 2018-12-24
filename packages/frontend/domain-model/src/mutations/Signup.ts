import gql from "graphql-tag";

const Signup = gql`
  mutation Signup($email: String! $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
    }
  }
`;

export default Signup;
