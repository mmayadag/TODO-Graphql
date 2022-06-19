import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation Register($name:String!, $email:String!, $password:String!) {
    register(name:$name, email:$email, password:$password){
        status,
        msg,
        data
	}
}

`;
/*
mutation SignUp($name: String, $email: String, $password: String) {
    signUp(name:$name, email: $email,password: $password) {
        accessToken
    }
}
*/