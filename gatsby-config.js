module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'botxo.co',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
      },
    },
  ]
}