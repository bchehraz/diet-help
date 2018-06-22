import React, { Component } from 'react'
import Link from 'gatsby-link'
//import { Element , Events, animateScroll as scroll, scrollSpy, scroller, Link } from 'react-scroll'

import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.renderLink = this.renderLink.bind(this);
  }

  renderLink(title, index) {
    return (
      <Link
        to="#hello"
        style={styles.Link}
        key={index}
      >
        <li style={styles.li}>
          <h1 style={{ margin: 0 }}>{title}</h1>
        </li>
      </Link>
    );
  }

  render() {

    const navTitles = [
      'Intro',
      'Step 1',
      'Step 2',
      'Step 3',
    ];

    return (
      <div
        style={{
          background: 'rebeccapurple',
          padding: 0,
          width: '100vw',
          zIndex: 2,
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0.5rem 1.0875rem',
          }}
        >
          <ul style={styles.ul}>
            {navTitles.map((title, index) => {
              return this.renderLink(title, index);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  ul: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
  },
  li: {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px 0',
  },
  liHover: {

  },
  Link: {
    color: 'white',
    textDecoration: 'none',
    flex: 1,
    textAlign: 'center',
  },
}

export default Header
