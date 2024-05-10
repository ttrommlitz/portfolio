import * as React from "react"
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'
import { Link, graphql } from "gatsby"

// The data prop is the results of the exported page query
export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in manchester</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* img src is relative path because Gatsby automatically puts static assets there */}
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%'}}/>
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  )
}

// This is how you do a graphql query for a whole page (page query)
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
