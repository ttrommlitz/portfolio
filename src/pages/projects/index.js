import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, projects as projectsClass } from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and websites Ive created</h3>
        <div className={projectsClass}>
          {projects.map(project => {
            return <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          })}
        </div>
        <p>Like what you see? Email me at { contact } for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`