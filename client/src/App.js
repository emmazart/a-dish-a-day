import './App.css';
import { UserProvider } from './utils/GlobalState';
import Landing from '../src/pages/Landing';
import SignInOrSignUp from '../src/pages/SignInOrSignUp';

function App() {
  return (
    <UserProvider>
      {/* <Landing className="landing-page"></Landing> */}
      <SignInOrSignUp></SignInOrSignUp>
    </UserProvider>
  );
}

export default App;
