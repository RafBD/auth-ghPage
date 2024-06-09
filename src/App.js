import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/Login/Login';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const { isAuthenticated, isLoading, error, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oops... {error.message}</div>;

  console.log("Is Authenticated:", isAuthenticated);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <>
            <h1>Authenticated</h1>
            <p>
              You are authenticated! You can now access the application.
            </p>
            <span className='saludo'>Hola, {user.name}</span>
            <img src={user.picture} alt={user.name} />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </Router>
  );
}

export default App;