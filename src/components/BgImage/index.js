import React from 'react';
import Img from 'gatsby-image';

const BgImage = (props) => (
    <Img
      sizes={props.image.sizes}
      style={
        (props.style) ? { ...props.style, ...styles.base } : styles.img
      }
    />
);

const styles = {
  img: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: '-1',
  },
  base: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: '-1',
  }
}

export default BgImage;
