/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Site } from '../../graphql-types';

type Props = {
  description?: string;
  meta?: [];
  title?: string;
};

const Seo: React.FC<Props> = ({ description, meta, title, children }) => {
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
  );

  const metaDescription =
    description || (siteMetadata && siteMetadata.description) || 'Description';
  const metaTitle =
    title || (siteMetadata && siteMetadata.title) || 'Bengineering';

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
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
                  content:
                    (siteMetadata && siteMetadata.author) ||
                    'Benedikt Schnatterbeck',
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
      {children}
    </>
  );
};

export default Seo;
