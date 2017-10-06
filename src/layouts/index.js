import React from 'react'
import Link from 'gatsby-link'
import Navigation from './Navigation'

const Header = () => (
  <div>
    <div>
      <h1 style={{display: 'inline'}}><Link to="/">Clark Carter</Link></h1>
      <Navigation />
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
