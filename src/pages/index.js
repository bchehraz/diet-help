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
    //window.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.handleScroll)
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

  renderLayer = (offset, speed, name, content, containerStyle, styles={ height: '25vh' }) => {

    return (
      <div name={name} id={name} style={containerStyle}>
        <ParallaxLayer offset={offset} speed={speed}>
          <div
            style={{
              ...styles,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {content}
          </div>
        </ParallaxLayer>
      </div>
    )
  }

  render() {
    const { data } = this.props;

    return (
      <div style={{ padding: 0, margin: 0, textAlign: 'center', overflow: 'hidden', }}>

          <BgImage image={data.bgImg} style={{ width: '100%', height: '100vh' }}/>
          {
            this.renderLayer(0, 0.5, "top", (
              <h1 style={{ color: '#fff', fontSize: '5em', }}>
                Main Title
              </h1>
            ),
            styles.mainTitleContainer,
            { height: '75vh' })
          }

          <div
            style={{
              height: '50vh',
            }}
          >
            {
              this.renderLayer(0, 1, "intro",
              (<h1 style={styles.subtitle}>Introduction</h1>),
              styles.subtitleContainer,
              {
                height: '25vh',
                backgroundColor: '#ccc',
              })
            }
          </div>
            {this.renderLayer(0, 1, "step1",
              (<h1 style={styles.subtitle}>Step 1</h1>),
            styles.subtitleContainer)}
            {this.renderLayer(0, 1, "step2",
              (<h1 style={styles.subtitle}>Step 2</h1>),
            styles.subtitleContainer)}
            {this.renderLayer(0, 1, "step3",
              (<h1 style={styles.subtitle}>Step 3</h1>),
            styles.subtitleContainer)}
        </div>
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
    color: '#fff',
    fontSize: '3em',
    fontSize: '5em',
  },
  parallax: {
    height: '100vh',
    backgroundColor: 'black',
    width: '100vw',
    overflowY: 'scroll',
    position: 'fixed',
    top: 0, left: 0,
    zIndex: 1,
  },
  mainTitleContainer: {
    height: '100vh',
  },
  subtitleContainer: {
    height: '50vh',
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
