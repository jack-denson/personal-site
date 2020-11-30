import React from 'react';
import './Section.css'
import { Paper } from '@material-ui/core'
import FadeIn from './FadeIn.js'

class Section extends React.Component {

  state = {'height': '60vh'}

  componentDidMount() {
    this.setState({'height': (this.refs.wrapper.clientHeight+'px')});
    window.addEventListener('resize', () => {this.setState({'height': (this.refs.wrapper.clientHeight+'px')})})
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setState({'height': (this.refs.wrapper.clientHeight+'px')}))
  }

  render() {
    let title = <Paper className ='title' elevation={5} style={{'height':this.state.height}}><div className="title-content"><h2>{this.props.title}</h2> <img src={this.props.image} className='icon' alt = {this.props.imAlt}/></div></Paper>
    let content = <Paper className = 'content-paper' elevation={5}><div className = "content">{this.props.children}</ div></Paper>
    let first = this.props.titleLeft ? title : content;
    let second = this.props.titleLeft ? content : title
    return <FadeIn><div className="Section" ref='wrapper'>{first}{second}</div></FadeIn>
  }
}
export default Section;
