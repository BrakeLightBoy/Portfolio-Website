import logo from './programming.gif';
import './App.css';
import './components/Project';
import Project from './components/Project';
import mp_icon from './assets/mp_icon.png';

function App() {
  
  const projectData = [
    {
      title: 'Market Pulse',
      text: 'A web platform that utilises machine learning in order to predict public sentiment of NAZDAQ companies and then predict market trend.',
      image: mp_icon
    },
    {
      title: 'Dentistimo',
      text: 'A web platform aimed at tackling the complex and inefficient booking system which Gothenburg residents use for booking dentist visits.',
      image: mp_icon
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael Larsson</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Body">
        <div className="Project-div">
          <h1 className="Project-title">Projects</h1>
          <Project projects={projectData}></Project>
          <div className="Button-div">
            <button className="Project-button">See more!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
