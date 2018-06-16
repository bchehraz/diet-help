import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {
  constructor(props) {
    super(props);

    this.renderLink = this.renderLink.bind(this);
  }

  renderLink(title) {
    return (
      <Link
        to="/"
        style={styles.Link}
        key={title}
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
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <ul style={styles.ul}>
            {navTitles.map((title) => {
              return this.renderLink(title);
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
  },
  li: {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px 0',
  },
  Link: {
    color: 'white',
    textDecoration: 'none',
    flex: 1,
    textAlign: 'center',
  },
}

export default Header
