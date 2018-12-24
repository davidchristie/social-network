import gql from "graphql-tag";

const Login = gql`
  mutation Login($email: String! $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default Login;
