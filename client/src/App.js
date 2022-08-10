import './App.css';
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { UserProvider } from './utils/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import NoMatch from '../src/pages/NoMatch';
import Dashboard from './pages/Dashboard';
import RecipeSearch from './pages/AllRecipes';
import SingleRecipe from './pages/SingleRecipe';
import { Typography } from '@mui/material';

const httpLink = createHttpLink({
  uri: 'http://localhost:38797/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {

  return (
    <ApolloProvider client={client}>
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route 
            path="/login"
            element={<SignIn />}
          />
          <Route 
            path="/signup"
            element={<SignUp />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
          <Route 
            path="/dashboard"
            element={<Dashboard/>}
          />
          <Route 
            path="/recipes"
            element={<RecipeSearch />}
          />
          <Route 
            path="/recipes/*"
            element={<SingleRecipe />}
          />
          <Route
            path="/profile"
            element={<Profile />}
            />
          <Route 
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </UserProvider>
    </ApolloProvider>
  );
}

export default App;
