import './App.css';
import { UserProvider } from './utils/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import About from './pages/About';
import NoMatch from '../src/pages/NoMatch';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing className="landing-page" />}
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
          {/* <Route 
            path="/dashboard"
            element={<Dashboard />}
          /> */}
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
