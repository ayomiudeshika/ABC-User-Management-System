import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to ABC User Management System</h1>
       <button className="button-users" onClick={()=> navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;

