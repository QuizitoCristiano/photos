import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Link to="/login">Link para  Login</Link> |{" "}
      <Link to="/register">Link para Register</Link>
      <Link to="/cachoros">Link para Cachoros</Link>
      <Link to="novaimagem">Link para Novaimagem</Link>
      <Link to="individual">Link para Individual</Link>
      <Link to="search">Link para Search</Link>
    </div>
  );
}

export default App;
