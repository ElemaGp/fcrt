import './App.css';
import Profile from './pages/profile/Profile';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

type graphqlErrorsProp = any;

const errorLink = onError(({ graphqlErrors, networkError}:graphqlErrorsProp) =>{
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}:graphqlErrorsProp)=>{
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: "https://spacex-production.up.railway.app/"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Profile />
      </div>
    </ApolloProvider>
  );
}

export default App;
