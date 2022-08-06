import './App.css';
import { UserProvider } from './utils/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import About from './pages/About';
import NoMatch from '../src/pages/NoMatch';
import Dashboard from './pages/Dashboard';
import RecipeSearch from './pages/AllRecipes';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
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
            element={<Dashboard />}
          />
          <Route 
            path="/recipes"
            element={<RecipeSearch />}
          />
          <Route 
            path="/singlerecipe"
            element={<SingleRecipe />}
          />
          <Route 
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
