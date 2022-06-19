import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      id
    }
  }
`;