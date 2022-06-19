import { gql } from '@apollo/client';

// TODO: make here 
// updateTodo(id, isCompleted)

export const SIGNUP_MUTATION = gql`
    mutation SignUp($name: String, $email: String, $password: String) {
        signUp(name:$name, email: $email,password: $password) {
            id
            email
            token
        }
    }
`;
