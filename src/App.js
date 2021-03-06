import './App.css';
import { Grid } from '@material-ui/core'
import Section from './Section.js'
import JackRound from './img/JackRound.png'
import ProjectsIcon from './img/projects.png'
import Technologies from './img/Technologies.png'
import Contact from './img/contact.png'
import Divider from '@material-ui/core/Divider';
import ProjectSelector from './ProjectSelector'
import { useEffect } from 'react'
import Link from '@material-ui/core/Link';
import Resume from './resume.pdf'

function App() {
  useEffect(() => {
   document.title = "Jack Denson's Personal Website"
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jack Denson</h1>
      </header>
      <Section className="AppSection" title = "About" titleLeft={true} image={JackRound} imAlt = "Jack Denson">
      <h3>Welcome to my personal website!</h3>
      <p> My name is Jack Denson; I am a second-year student studying Computer Science at Northeastern University.</p>
      <p> I have a passion for software engineering, and I am currently particularly interested in data science, artificial intelligence and machine learning, and web development - but I am interested in something new all the time!</p>
      <p> </p>
      <p> My personal interests include movies(favorites are Seth Rogen/Jonah
         Hill comedies, quirky documentaries, and the Coen brothers),
       cooking(trying to expand my reach beyond grilled chicken), staying active, and learning new skills!</p>
       <p>I really enjoy building new and fun tools and games that I can get real use out of -
        and also learn a new framework, language, or technology in the process.</p>
      </Section>
      <Section className="AppSection" title = "Projects" titleLeft={false} image={ProjectsIcon} imAlt = "Projects Icon">
      <h3>Some fun stuff I've worked on</h3>
      <ProjectSelector />
      </Section>
      <Section className="AppSection" title = "Technologies" titleLeft={true} image = {Technologies} imAlt = "Tech Icon">
      <h3>Some fun tech I know</h3>
      <h4>Languages</h4>
      <Divider />
      <p>Java, Python, JavaScript, SQL, HTML, CSS</p>
      <h4>Frameworks, Libraries, and Miscellaneous Technologies</h4>
      <Divider />
      <p>Node.js, APIs, Git, TensorFlow, Keras, React.js, JSX, NPM, virtualenv, Express.js, NumPy, Pandas, Scikit-Learn, Flask, JUnit, Socket.io, Bootstrap, Material UI</p>
      <h4>Applications</h4>
      <Divider />
      <p>Github, Gitlab, Jupyter Notebooks, Spyder, Python IDLE, IntelliJ, PyCharm, Eclipse, Adobe Photoshop, Microsoft Office, Git Bash, Oracle VirtualBox, Postman, Atom, Sublime</p>
      <h4>Systems</h4>
      <Divider />
      <p>Windows & Linux</p>
      </Section>
      <Section className = "AppSection" title = "Contact" titleLeft = {false} image = {Contact} imAlt = "Contact Icon">
      <h3>Some easy ways to contact me</h3>
        <p>You can <Link href={Resume} target="_blank" rel="noopener noreferrer">check out my resume!</Link></p>
        <p>You can <Link href="mailto:denson.ja@northeastern.edu" target="_blank" rel="noopener noreferrer">email me at denson.ja@northeastern.edu</Link></p>
        <p>You can <Link href='https://www.linkedin.com/in/jack-denson' target="_blank" rel="noopener noreferrer">add me on LinkedIn</Link></p>

      </Section>
    </div>
  );
}
export default App;
//resume, about, projects, contact
