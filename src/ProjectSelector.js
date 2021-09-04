import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './ProjectSelector.css'
import Divider from '@material-ui/core/Divider';

class ProjectSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'project':''};
    this.content = {'': <p style={{'textAlign': 'center'}}><i>Select a project for more details</i></p>,

      'Machine Learning Watermarker' : <ul>
        <li key="bullet1">Built steganographic “watermark” tool using machine learning, subtly altering photos by adding a robust and invisible watermark.</li>
        <li key="bullet2">One neural network would take in an image, and return an image that looks the same, but is slightly different.</li>
        <li key="bullet3">The other neural network would take in an image and detect if a watermark had been added.</li>
        <li key="bullet4">Built a front-end site and an API to easily access the watermarker.</li>
        <li key="bullet5">Used Python(TensorFlow, Keras, NumPy, Flask), and JavaScript with React.js to build the tool.</li>
        </ul>,
      'Database-backed Expense Tracker' : <ul>
        <li key="bullet1">Built a simple expense tracking site that would store given expenses to track my spending habits.</li>
        <li key="bullet2">Implemented a login page, followed by a table displaying expenses for a given user.</li>
        <li key="bullet3">Used Node.js, Express.js, and a lightweight database called NEDB for the backend.</li>
        <li key="bullet4">Used vanilla JavaScript, HTML, and CSS to build the front-end.</li>
        </ul>,
      'Multiplayer Poker Game': <ul>
          <li key="bullet1">Built a multiplayer online Texas-Holdem game using Socket.io</li>
          <li key="bullet2">Used Node.js for the backend, using Express.js to serve the pages and Socket.io handle the gameplay.</li>
          <li key="bullet3">Used vanilla JavaScript, HTML, and CSS(with a bit of Bootstrap) on the front-end.</li>
          <li key="bullet4">Unfinished - got distracted by other projects about 75% through, would love to finish this project up.</li>
        </ul>,
      'Personal Website' : <ul><li>Designed and built this personal website.</li>
          <li key="bullet1">Wanted to further my skills in React.js and also gain experience with deployment.</li>
          <li key="bullet2">Used React, JavaScript, HTML, and CSS to build the site.</li>
          <li key="bullet3">Used MaterialUI to make some of the components look nicer.</li>
          <li key="bullet4">Used AWS Amplify to deploy the site, which makes CD easy through Github.</li>
          <li key="bullet5">Connected AWS Amplify to a Google Domains domain to serve from jdenson.com.</li></ul>,
      'PDF from Image' : <ul>
            <li key="bullet1">Built tool to convert images to arbitrary-length pdf files through a simple Express API.</li>
            <li key="bullet2">Used JavaScript with Node.js, Express.js, and a library calledJSPdf to build the tool.</li>
            <li key="bullet3">Plan on deploying a static front-end site using AWS Amplify, connected to a serverless backend on AWS Lambda.</li>
            <li key="bullet4">May also need to utilize Amazon S3 to implement above site, or some form of cloud database to store PDF files.</li>
            <li key="bullet5">Future plans may also include implementing the Twilio API, so that I can send images via MMS, and create the PDF that way.</li>
            </ul>,
      'Various GUI Games in Java' : <ul>
            <li key="bullet1">Built 5-10 simple GUI games in Java</li>
            <li key="bullet2">Includes clones of Tetris, Atari Breakout, Snake, and PacMan, </li>
            <li key="bullet3">Also includes a basketball free-thrower and a connect-the-dots game of my own design(based on my graph-paper doodles)</li>
            <li key="bullet4">Also built a simple menu to select from these games and launch them.</li>
            <li key="bullet5">Mostly built using JFrames and Java's awt library.</li>
          </ul>,
      'Sample Online Ordering System':<ul>
            <li key="bullet1">This project is in it's nascent stages, but I have started working on the the layout and data functionality for an online store.</li>
            <li key="bullet2">I would love to get some exposure to online payment frameworks like Stripe, and get some experience in the e-commerce space. </li>
            <li key="bullet3">Have started building the front-end of the site in Vue.</li>
          </ul>,
      'Many, many more!' :<div><p>This list is not even close to exhaustive, I have been building projects since I was 11!</p>
      <p>I have used a number of other frameworks, languages, and technologies to build many more projects, including:</p>
      <ul>
      <li key="bullet1">An implementation of Neural Style Transfer in Python with TensorFlow(relying heavily on other implementations)</li>
      <li key="bullet2">A music popularity regressor built using Spotify's dataset(Using Python and Scikit-Learn for my Data Science class)</li>
      <li key="bullet3">Countless small games in Python and Java</li>
      <li key="bullet4">Many more projects, dated 2021 and beyond!</li>
      </ul>
      </div>
    }
  }

  handleClick = (event, selected) => {
    this.setState({'project': selected})
  }

  render() {
    const items = []
    items.push(<Divider />)
    for(let project in this.content) {
      if(!(project === '')) {
        items.push(<ListItem button onClick={(e) => this.handleClick(e, project)} selected={this.state.project===project} key={project}> {project}</ListItem>)
        items.push(<Divider />)
      }
    }

    return <div className = 'projects'>
      <List component='nav' className='nav-list'>
        {items}
      </List>
      <div className='description'>{this.content[this.state.project]}</div>
    </div>

  }
}
export default ProjectSelector

/*
<ul>
  <li>Machine Learning-Backed Image Watermarker
    <ul>
    <li>Built steganographic “watermark” tool using machine learning, subtly altering photos by adding a robust and invisible watermark.</li>
    <li>One neural network would take in an image, and return an image that looks the same, but is slightly different.</li>
    <li>The other neural network would take in an image and detect if a watermark had been added.</li>
    <li>Built a front-end site and an API to easily access the watermarker.</li>
    <li>Used Python(TensorFlow, Keras, Flask), and JavaScript with React.js to build the tool.</li>
    </ul>
  </li>
  <li>Database-backed Expense Tracker
  <ul>
  <li>Built a simple expense tracking site that would store given expenses to track my spending habits.</li>
  <li>Implemented a login page, followed by a table displaying expenses for a given user.</li>
  <li>Used vanilla JavaScript, HTML, and CSS to build the front-end, and Node.js, Express.js, and a lightweight database called NEDB for the backend.</li>
  </ul>
  </li>
  <li> Various Java-based games
  <ul>
    <li>Built 5-10 simple GUI games in Java</li>
    <li>Includes clones of Tetris, Atari Breakout, Snake, PacMan, alongside a basketball free-thrower, as well as a menu to select from these games</li>
  </ul>
  </li>
</ul>
*/
/*
<ListItem button onClick={(e) => this.handleClick(e, 'watermarker')} selected={this.state.project==='watermarker'}> Machine Learning Watermarker </ListItem>
<Divider />
<ListItem button onClick={(e) => this.handleClick(e, 'expense tracker')} selected={this.state.project==='expense tracker'}>Database-backed Expense Tracker </ListItem>
<Divider />
<ListItem button onClick={(e) => this.handleClick(e, 'java games')} selected={this.state.project==='java games'}>Various GUI Games in Java</ListItem>







<img src={Watermarker} style={{'width': '70%'}}/>

*/
