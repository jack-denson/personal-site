import React from 'react'
import Fade from '@material-ui/core/Fade';
import './FadeIn.css'

export default function FadeIn(props) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const intersectObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            setVisible(true);
          }
        });
    }, {threshold:0.3});
    intersectObs.observe(ref.current);
    return () => intersectObs.unobserve(ref.current);
    }, []);

  return <div ref={ref} className={"section" + (visible ? " visible" : "")}>{props.children}</div>;
}
