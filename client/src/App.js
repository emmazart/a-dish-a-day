import './App.css';
import { UserProvider } from './utils/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import SignInOrSignUp from '../src/pages/SignInOrSignUp';

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
            element={<SignInOrSignUp></SignInOrSignUp>}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
