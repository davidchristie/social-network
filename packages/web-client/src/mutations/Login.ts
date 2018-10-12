import gql from "graphql-tag";

export interface LoginData {
  login: {
    token: string;
  };
}

export interface LoginVariables {
  email: string;
  password: string;
}

const Login = gql`
  mutation Login($email: String! $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default Login;
