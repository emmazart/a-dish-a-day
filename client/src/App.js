import './App.css';
import { UserProvider } from './utils/GlobalState';
import Landing from '../src/pages/Landing';

function App() {
  return (
    <UserProvider>
      <Landing className="landing-page"></Landing>
    </UserProvider>
  );
}

export default App;
