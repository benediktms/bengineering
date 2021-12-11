// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'Bengineering',
    description:
      'The Web. The final frontier. These are the voyages of Ben. His neverending mission: To expolore strange new technologies. To seek out new knowledge and new best coding practises. To go boldly where so many others have probably gone before',
    author: '@benediktms',
    siteUrl: 'https://bengineering.dev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-ts',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-transformer-remark`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: `›`,
              aliases: {
                ts: 'typescript',
                tsx: 'typescriptreact',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
