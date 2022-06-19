import { gql } from '@apollo/client';

export const DELETE_MUTATION = gql`
    mutation Delete($id: String) {
        deleteTodo(id){ id }
    }
`;
