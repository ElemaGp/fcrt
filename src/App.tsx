import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import Login from './pages/login/Login';
import { useContext, useEffect } from "react";
import { AuthContext } from './components/authContext/AuthContext';
import { logout } from './components/authContext/AuthActions';


type graphqlErrorsProp = any;

const errorLink = onError(({ graphqlErrors}:graphqlErrorsProp) =>{
  if (graphqlErrors) {
    graphqlErrors.map(({message}:graphqlErrorsProp)=>{
      alert(`Graphql error ${message}`);
      return message
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

  const {user, dispatch} = useContext(AuthContext);

  useEffect(() => {
    if (user){
    setTimeout(() => {
      if (dispatch){
      dispatch(logout());
      }
    }, 120000);
  }
  }, [user, dispatch]);


  return (
    <ApolloProvider client={client}>
      <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={user ? <Profile /> : <Login />} />
              <Route path="login" element={user ? <Profile /> : <Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
