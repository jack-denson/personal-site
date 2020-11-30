import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './ProjectSelector.css'
import Divider from '@material-ui/core/Divider';
import Watermarker from './img/watermarker.PNG'

class ProjectSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'project':''};
    this.content = {'': <p style={{'textAlign': 'center'}}><i>Select a project for more details</i></p>,

      'Machine Learning Watermarker' : <ul>
        <li>Built steganographic “watermark” tool using machine learning, subtly altering photos by adding a robust and invisible watermark.</li>
        <li>One neural network would take in an image, and return an image that looks the same, but is slightly different.</li>
        <li>The other neural network would take in an image and detect if a watermark had been added.</li>
        <li>Built a front-end site and an API to easily access the watermarker.</li>
        <li>Used Python(TensorFlow, Keras, NumPy, Flask), and JavaScript with React.js to build the tool.</li>
        </ul>,
      'Database-backed Expense Tracker' : <ul>
        <li>Built a simple expense tracking site that would store given expenses to track my spending habits.</li>
        <li>Implemented a login page, followed by a table displaying expenses for a given user.</li>
        <li>Used Node.js, Express.js, and a lightweight database called NEDB for the backend.</li>
        <li>Used vanilla JavaScript, HTML, and CSS to build the front-end.</li>
        </ul>,
      'Multiplayer Poker Game': <ul>
          <li>Built a multiplayer online Texas-Holdem game using Socket.io</li>
          <li>Used Node.js for the backend, using Express.js to serve the pages and Socket.io handle the gameplay.</li>
          <li>Used vanilla JavaScript, HTML, and CSS(with a bit of Bootstrap) on the front-end.</li>
          <li>Unfinished - got distracted by other projects about 75% through, would love to finish this project up.</li>
        </ul>,
      'Personal Website' : <ul><li>Designed and built this personal website.</li>
          <li>Used React, JavaScript, HTML, and CSS to build the site.</li>
          <li>Used MaterialUI to make some of the components look nicer.</li>
          <li>Planning on using AWS to deploy</li></ul>,
      'Various GUI Games in Java' : <ul>
            <li>Built 5-10 simple GUI games in Java</li>
            <li>Includes clones of Tetris, Atari Breakout, Snake, and PacMan, </li>
            <li>Also includes a basketball free-thrower and a connect-the-dots game of my own design(based on my graph-paper doodles)</li>
            <li>Also built a simple menu to select from these games and launch them.</li>
            <li>Mostly built using JFrames and Java's awt library.</li>
          </ul>,
      'Many, many more!' : <ul><li>This list is not even close to exhaustive, I have been building projects since I was 11!</li>
      <li>I have used a number of other frameworks, languages, and technologies to build many more projects, including:</li>
      <ul>
      <li>An implementation of Neural Style Transfer in Python with TensorFlow(relying heavily on other implementations)</li>
      <li>A music popularity regressor built using Spotify's dataset(Using Python and Scikit-Learn for my Data Science class)</li>
      <li>Countless small games in Python and Java</li>
      <li>Many more projects, dated 2021 and beyond!</li>
      </ul></ul>
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
