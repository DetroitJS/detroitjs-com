module.exports = {
  siteMetadata: {
    title: 'Detroit JS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'meetups',
        path: `${__dirname}/meetups`
      }
    }
  ]
}
