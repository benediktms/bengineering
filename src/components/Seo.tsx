/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Site } from "../../graphql-types"

type Props = {
  description?: string
  lang?: string
  meta?: []
  title?: string
}

const Seo: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { siteMetadata } = useStaticQuery<Site>(
    graphql`
      query Site {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription =
    description || (siteMetadata && siteMetadata.description) || "Description"
  const metaTitle = title || (siteMetadata && siteMetadata.title) || "Title"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={
        meta
          ? [
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: (siteMetadata && siteMetadata.author) || ``,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)
          : undefined
      }
    >
      <script
        src="https://kit.fontawesome.com/58df6eefbf.js"
        crossOrigin="anonymous"
      ></script>
    </Helmet>
  )
}

export default Seo
