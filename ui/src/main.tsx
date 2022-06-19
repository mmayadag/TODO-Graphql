import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import { TodoContextProvider } from '@/context/todoContext';
import { AuthContextProvider } from '@/context/authContext';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql', //'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <TodoContextProvider>
          <App />
        </TodoContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  </React.StrictMode>
)
