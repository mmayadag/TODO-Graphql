import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
    mutation SignUp($name: String, $email: String, $password: String) {
        signUp(name:$name, email: $email,password: $password) {
            accessToken
        }
    }
`;
