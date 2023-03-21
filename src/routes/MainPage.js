import linkedInLogo from '../icons/LinkedIn_icon.svg';
import githubLogo from '../icons/github_icon.svg';
import gmailLogo from '../icons/gmail_icon.svg';
import '../styles/MainPage.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael Larsson</h1>
        <h2>Who am I?</h2>
        <h3>I'm an aspiring Software Developer currently studying a bachelors in Software Engineering & Management.</h3>
        <h2>Contact Me</h2>
        <div>
        <a href="https://www.linkedin.com/in/michael-larsson-368499214/" target={'_blank'}>
          <img 
          src = {linkedInLogo} 
          alt = "LinkedInLogo"
          style={{ height: 53, width: 36, padding:30}}/>
        </a>
        <a href="https://github.com/BrakeLightBoy" target={'_blank'}>
          <img 
          src = {githubLogo} 
          alt = "GithubLogo"
          style={{ height: 53, width: 53, padding:30}}/>
        </a>
        <a href="mailto:michellarsson962@gmail.com" target={'_blank'}>
          <img 
          src = {gmailLogo} 
          alt = "Gmail"
          style={{ height: 50, width: 50, padding:30}}/>
        </a>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

<div>
  <p style={{width: '70px', textAlign: 'center'}}>Example</p>
</div>

<div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
        </div>
      </header>
    </div>
  );
}

export default App;
