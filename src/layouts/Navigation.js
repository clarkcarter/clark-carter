import React from 'react';
import Link from 'gatsby-link';

const style = {
  display: 'inline',
  float: 'right',
}

const linkStyle = {
  padding: '0px 5px',
}

const Navigation = () => {
  return (
    <div style={style}>
      <Link style={linkStyle} to="/">home</Link>
      <Link style={linkStyle} to="/about">about</Link>
      <Link style={linkStyle} to="/contact">contact</Link>
    </div>
  )
}

export default Navigation;
