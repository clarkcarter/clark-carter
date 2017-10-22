import React from 'react';
import Link from 'gatsby-link';

const style = {
  display: 'inline',
  float: 'right',
  textDecoration: 'none',
  padding: 0,
  margin: 0,
  marginRight: 2,
  color: '#aaa',
  fontFamily: 'arial',
  fontWeight: 400
}

const Navigation = () => {
  return (
    <div style={style}>
      <a style={style} href="mailto:clark@clarkcarter.com"><h1 style={style}>Contact</h1></a>
    </div>
  )
}

export default Navigation;
