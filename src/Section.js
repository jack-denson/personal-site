import React from 'react';
import './Section.css'
import { Paper } from '@material-ui/core'
import FadeIn from './FadeIn.js'
import Divider from '@material-ui/core/Divider';


class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'height': '60vh', 'mobile':(window.innerWidth < 675)};
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    this.updateComponentHeight();
    window.addEventListener("resize", this.updateComponentHeight.bind(this));
    window.addEventListener("load", this.updateComponentHeight.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateComponentHeight.bind(this));
    window.addEventListener("resize", this.updateComponentHeight.bind(this));
  }

  updateComponentHeight() {
    this.setState({'height': (this.wrapperRef.current.clientHeight+'px'), 'mobile':(window.innerWidth < 675)})
  }


  render() {
    let title = <Paper className ='title' elevation={5} style={{'height':this.state.height}}><div className="title-content"><h2>{this.props.title}</h2> <img src={this.props.image} className='icon' alt = {this.props.imAlt}/></div></Paper>
    let content = <Paper className = 'content-paper' elevation={5}><div className = "content">{this.props.children}</ div></Paper>
    let first = this.props.titleLeft ? title : content;
    let second = this.props.titleLeft ? content : title
    if(!this.state.mobile) {
      return <FadeIn><div className="Section" ref={this.wrapperRef}>{first}{second}</div></FadeIn>
    }
    else {
      return <FadeIn><Paper className="Section-mobile" ref={this.wrapperRef}><h2>{this.props.title}</h2><img src={this.props.image} className='icon' alt = {this.props.imAlt}/><Divider /><div className='content-mobile'>{this.props.children}</div></Paper></FadeIn>
    }
  }
}
export default Section;
