import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Parallax, ParallaxLayer } from 'react-spring'
import { Element } from 'react-scroll'

import BgImage from '../components/BgImage';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: '',
      lastScrollPos: 0
    };

    //this.handleScroll = this.handleScroll.bind(this);
  }

  /*componentDidMount() {
    //window.addEventListener('scroll', (e)=>console.log(e.target), true);
    window.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if(this.state.lastScrollPos > event.target.scrollTop) {
      this.setState({
        direction:'top',
        lastScrollPos:event.target.scrollTop
      });
    } else if(this.state.lastScrollPos < event.target.scrollTop) {
      this.setState({
        direction:'bottom',
        lastScrollPos:event.target.scrollTop
      });
    }
  }*/

  renderLayer = (offset, speed, content, style={ height: '25vh' }) => {
    return (
      <ParallaxLayer offset={offset} speed={speed}>
        <div
          style={{
            ...style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ccc',
          }}
        >
          {content}
          <span id="hello">Hello, Scroller</span>
        </div>
      </ParallaxLayer>
    )
  }

  render() {
    const { data } = this.props;

    return (
      <Parallax pages={2} style={styles.parallax}>
        <div style={{ padding: 0, margin: 0, textAlign: 'center', overflow: 'hidden', }}>
          <div
            style={{
              height: '100vh'
            }}
          >
            <BgImage image={data.bgImg} style={{ width: '100%', height: '100vh' }}/>
            <ParallaxLayer offset={0} speed={0.5}>
              <div
                style={{
                  height: '75vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h1 style={{ color: '#fff', fontSize: '5em', }}>Main Title</h1>
              </div>
            </ParallaxLayer>
          </div>

          <div
            style={{
              height: '50vh',
              color: 'red',
            }}
          >
            <ParallaxLayer offset={0} speed={1} style={{textAlign:'center'}}>
              <div
                style={{
                  height: '25vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ccc'
                }}
              >
                <h1 style={styles.subtitle}>Introduction</h1>
              </div>
            </ParallaxLayer>
          </div>

          <div
            style={{
              height: '50vh',
            }}
          >
            {this.renderLayer(0, 1, (<h1 style={styles.subtitle}>Hello World</h1>))}
          </div>
        </div>
      </Parallax>
    )
  }
}

export default IndexPage

const styles = {
  title: {
    color: '#fff',
    fontSize: '5em',
  },
  subtitle: {
    color: '#000',
    fontSize: '3em',
    fontSize: '5em',
    border: '1px solid black',
  },
  parallax: {
    height: '100vh',
    backgroundColor: 'black',
    width: '100vw',
    overflowY: 'scroll',
    position: 'fixed',
    top: 0, left: 0,
    zIndex: 1,
  }
}

export const pageQuery = graphql`
  query ImageQuery {
    # Get background image
    bgImg: imageSharp(id: { regex: "/beach/" }) {
      sizes(maxWidth: 2000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  `
