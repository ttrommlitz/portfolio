import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {
  // This is how to do a query for a non page component
  // We cannot use query variables in static queries (but can in page)
  // can only use this hook once in a component
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar