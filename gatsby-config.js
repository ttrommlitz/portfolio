/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // plugins are external datasources
  plugins: [
    'gatsby-transformer-remark', // transform md files for use in the graphql layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'Web Dev Portfolio',
    copyright: 'This website is copyright 2021 web warrior'
  }
}
