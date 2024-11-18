import logo from '../assets/programming.gif';
import '../styles/HomePage.css';
import Project from '../components/Project';
import projectData from '../data/projectData';

function HomePage() {
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
            <a href='/Projects' className="button">See more!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
