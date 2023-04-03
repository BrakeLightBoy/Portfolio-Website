import linkedInLogo from '../icons/LinkedIn_icon.svg';
import githubLogo from '../icons/github_icon.svg';
import gmailLogo from '../icons/gmail_icon.svg';
import '../styles/MainPage.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='row page-row'>
          <div className='col col-1'>
            <h1 id='headerTitle'>Michael<br></br>Larsson</h1>
          </div>
          <hr
              style={{
              background: "#F2C230",
              height: "1px",
              border: "none",
              opacity: 1
              }}
            />
            <div className='row main-title-row'>
              <div className='col col-12 about-me'>
              <h1 id='about-title' className='main-page-text'>ABOUT <span id='me-text'>ME</span></h1>
              </div>
            </div>
            <div className='row main-title-row'>
              <div className='col col-12 about-me'>
              <h1 id='project-title' className='main-page-text'>MY <span id='project-text'>PROJECTS</span></h1>              </div>
            </div>
            <div className='row main-title-row'>
              <div className='col col-12 about-me'>
              <h1 id='contact-title' className='main-page-text'>CONTACT <span id='me-text'>ME</span></h1>              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
