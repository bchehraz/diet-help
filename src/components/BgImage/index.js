import React from 'react';
import Img from 'gatsby-image';

const BgImage = (props) => (
    <Img
      sizes={props.image.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: '-1',
      }}
    />
);

export default BgImage;
