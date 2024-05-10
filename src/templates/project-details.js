import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { details, featured, html as htmlClass } from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={details}>
        <h2>{ title }</h2>
        <h3>{ stack }</h3>
        <div className={ featured }>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={htmlClass} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails

// the slug variable comes from the context in the page generator in gatsby-node
export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`