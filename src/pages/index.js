import * as React from "react"
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

// The data prop is the results of the exported page query
export default function Home({ data }) {
  // const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in manchester</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
