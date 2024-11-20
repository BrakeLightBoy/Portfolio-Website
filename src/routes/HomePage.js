import logo from '../assets/programming.gif';
import '../styles/HomePage.css';
import Project from '../components/Project';
import projectData from '../data/projectData';
import Navigationbar from '../components/NavigationBar';
import { Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigationbar id="navbar"/>
        <hr></hr>
        <Row id="App-body">
          <Col id=""><h1 id="description">A full stack developer with a passion of developing seamless and robust websites and applications</h1></Col>
          <Col><img src={logo} className="App-logo" alt="logo" /></Col>
        </Row>
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
