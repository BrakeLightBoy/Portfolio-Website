import logo from './programming.gif';
import './App.css';
import './components/Project';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael Larsson</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
